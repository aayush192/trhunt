import React from 'react';
import { useState } from 'react';
import getData from '../date-fetch/fetch';
const GameTypeSelector = () => {
  const [data,setData]=useState('10');
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (index) => {
    setActiveButton(index);
  };
  return (
    <div className="game-type-selector">
     
        <button className={`type-card ${activeButton === 0 ? 'active' : ''}  hover:text-blue-300`} onClick={()=>{
          setData('10');
          handleClick(0)
        }}>
          <div className="icon font-bold">Basic </div>
       
          <p>A fun and challenging treasure hunt game with 10 clues.<br/>If you can't just quit.</p>
        </button>
        <button className={`type-card ${activeButton === 1 ? 'active' : ''}  hover:text-blue-300`} onClick={()=>{
          setData('20');
          handleClick(1)
        }}>
          <div className="icon font-bold">Intermediate</div>
         <p>A more challenging treasure hunt with 20 clues.<br/>Can you do it?</p>
        </button>
        <button className={`type-card ${activeButton === 2 ? 'active' : ''} hover:text-blue-300 `} onClick={()=>{
          setData('30');
          handleClick(2)
        }}>
          <div className="icon font-bold">Ultimate</div>
          <p>The hardest challenge with 30 difficult clues. Only the best can finish!</p>
        </button>
     
      <button className="proceed-btn" onClick={()=>{
        getData(data);
        console.log(data);
      }}>Proceed</button>
    </div>
  );
};

export default GameTypeSelector;
