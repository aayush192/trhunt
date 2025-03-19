import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const handleClick = (index) => {
    setActiveButton(index);
  };

  if (loading) {
    return <div>Loading challenges...</div>;
  }

  return (
    <div className="game-type-selector">
      <div className="game-selector">
        {val.map((element, index) => (
          <div key={element.type} >
            <button
              className={`type-card ${activeButton === index ? 'active' : ''} hover:text-blue-300 h-40`}
              onClick={() => {
                setData(element.type);
                handleClick(index);
              }}
            >
              <div className="icon font-bold">{element.difficulty}</div>
              <p>{element.description}</p>
            </button>
          </div>
        ))}
      </div>
      <div className="game-selector-button">
        <button
          className="proceed-btn"
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