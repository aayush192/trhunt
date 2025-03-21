import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPuzzlePiece, FaGem, FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import getData from '../date-fetch/fetch';
import userContext from '../context/Context';

const GameTypeSelector = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data, setData, val, setVal } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setVal(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleClick = (index, type) => {
    setActiveButton(index);
    setData(type);
  };

  const getIcon = (category) => {
    switch (category) {
      case 'Puzzle Adventure':
        return <FaMapMarkedAlt className="text-2xl text-blue-500" />;
      case 'Treasure Hunt':
        return <FaGem className="text-2xl text-yellow-500" />;
      default:
        return <FaPuzzlePiece className="text-2xl text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-blue-500" />
        <p className="ml-3 text-lg font-semibold text-gray-700">Loading challenges...</p>
      </div>
    );
  }

  return (
    <div className="game-type-selector p-5 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4 text-center">Select Your Challenge</h2>
      <div className="game-selector grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {val.map((element, index) => {
          const { type, title, description, difficulty, category } = element;
          return (
            <div key={type} className="   h-95 p-4 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105">
              <button
                className={`type-card  p-4 flex flex-col items-center gap-2 ${activeButton === index ? 'border-2 border-blue-500' : ''}`}
                onClick={() => handleClick(index, type)}
              >
                {getIcon(category)}
                <div className="icon font-bold text-lg text-gray-700">{difficulty}</div>
                <h3 className="title font-semibold text-xl text-gray-800">{title}</h3>
                <p className="description text-gray-600 text-center">{description}</p>
                <p className="category italic text-gray-500">{category}</p>
              </button>
            </div>
          );
        })}
      </div>
      <div className="game-selector-button mt-2 text-center w-full max-w-md">
        <button
          className="proceed-btn bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition w-full"
          onClick={() => {
            if (data) {
              navigate('clueDisplay');
            } else {
              alert('Please select a challenge first');
            }
          }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default GameTypeSelector;
