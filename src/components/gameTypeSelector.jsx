import React from 'react';
<<<<<<< HEAD

const GameTypeSelector = () => {
  return (
    <div className="game-type-selector">
      {['A', 'B', 'C'].map((type) => (
        <div className="type-card" key={type}>
          <div className="icon">✏️</div>
          <h3>Type {type}</h3>
          <p>The description of the game to be played in the type item and questions asked and prize</p>
        </div>
      ))}
      <button className="proceed-btn">Proceed</button>
=======
import { useState } from 'react';
import getData from '../date-fetch/fetch';
const GameTypeSelector = () => {
  const [data,setData]=useState('10');
  return (
    <div className="game-type-selector">
     
        <button className="type-card  hover:text-orange-300 " onClick={()=>{
          setData('10');
        }}>
          <div className="icon font-bold">Basic </div>
       
          <p>A fun and challenging treasure hunt game with 10 clues.<br/>If you can't just quit.</p>
        </button>
        <button className="type-card  hover:text-orange-300 " onClick={()=>{
          setData('20');
        }}>
          <div className="icon font-bold">Intermediate</div>
         <p>A more challenging treasure hunt with 20 clues.<br/>Can you do it?</p>
        </button>
        <button className="type-card  hover:text-orange-300 " onClick={()=>{
          setData('30');
        }}>
          <div className="icon font-bold">Ultimate</div>
          <p>The hardest challenge with 30 difficult clues. Only the best can finish!</p>
        </button>
     
      <button className="proceed-btn" onClick={()=>{
        getData(data);
        console.log(data);
      }}>Proceed</button>
>>>>>>> commit changes
    </div>
  );
};

export default GameTypeSelector;
