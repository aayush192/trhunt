import React from 'react';

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
    </div>
  );
};

export default GameTypeSelector;
