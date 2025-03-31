import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPuzzlePiece, FaGem, FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import getData from '../date-fetch/fetch';
import userContext from '../context/Context';

const GameTypeSelector = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data, setData, val, setVal ,ansresponse} = useContext(userContext);
  const navigate = useNavigate();

  if (ansresponse?.completed === false) 
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg text-center">
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="text-yellow-500 text-2xl">⬢</div>
          ))}
        </div>
        <p className="text-gray-700 text-lg font-medium">
           First complete the selected challenge
        </p>
        <div className="mt-4">
          <button 
            className="w-32 py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-purple-600 hover:scale-105" 
            onClick={() => navigate("/clueDisplay")}
          >
            proceed
          </button>
        </div>
      </div>
    );

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

  const handleClick = (type) => {
    setActiveButton(type);
  };

  const getIcon = (category) => {
    switch (category) {
      case 'Puzzle Adventure':
        return <FaMapMarkedAlt className="text-3xl text-purple-500" />;
      case 'Treasure Hunt':
        return <FaGem className="text-3xl text-yellow-500" />;
      default:
        return <FaPuzzlePiece className="text-3xl text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <AiOutlineLoading3Quarters className="animate-spin text-5xl text-purple-500" />
        <p className="ml-3 text-lg font-semibold text-gray-700">Loading challenges...</p>
      </div>
    );
  }

  return (
    <div className="game-type-selector p-8 bg-gray-100 rounded-xl shadow-lg flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Select Your Challenge</h2>
      <div className="game-selector grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        {val.map((element,index) => {
          const { rewardPoints,gameId, title, description, difficulty, category } = element;
          return (
            <div key={gameId} className="p-6 bg-white rounded-xl shadow-lg transform transition-transform hover:scale-105">
              <button
                className={`type-card p-5 flex flex-col items-center gap-4 border-2 rounded-lg ${activeButton === index ? 'border-purple-500' : 'border-gray-300'}`}
                onClick={() =>{
                  if(data===gameId){
                    handleClick(null);
                    setData(null);
                  }
                  else{
                   handleClick(index);
                   setData(gameId);
                  }
                }}
              >
                {getIcon(category)}
                <div className="icon font-bold text-lg text-gray-700">{difficulty}</div>
                <h3 className="title font-semibold text-xl text-gray-800">{title}</h3>
                <p className="description text-gray-600 text-center">{description}</p>
                <p className="category italic text-gray-500">{category}</p>
                 <p className="points font-semibold text-purple-600">{rewardPoints} Points</p>
              </button>
            </div>
          );
        })}
      </div>
      <div className="game-selector-button mt-6 w-full max-w-md flex justify-center">
      <button
        className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
            navigate('clueDisplay');
        }}
        disabled={!data}
      >
        Start Challenge
      </button>
      </div>
    </div>
  );
};

export default GameTypeSelector;
