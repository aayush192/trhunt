import React from 'react';

const ClueDisplay = () => {
  return (
    <div className="clue-display">
      <div className="clue-icons">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="clue-icon">⬢</div>
        ))}
      </div>
      <p>
        The description of the game to be played in the type item and questions asked and prize,
        the idea of the clue references of the clue and
      </p>
      <button className="next-btn">NEXT</button>
    </div>
  );
};

export default ClueDisplay;
