import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import userContext from "../context/Context";
import postVal from "../data-post/datapost";
import postans from "../data-post/answerpost";
import { FaPuzzlePiece, FaGem, FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useContext, useState } from "react";
import getClue from "../date-fetch/getClue";

const ClueDisplay = () => {
  const { data } = useContext(userContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [clue, setClue] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [ansresponse, setAnsResponse] = useState(null);

  // Moved fetchClue outside useEffect
  const fetchClue = async () => {
    if (response?.sessionId) {
      setLoading(true);
      setError(null);
      try {
        const clueData = await getClue(response.sessionId);
        setClue(clueData);
        setAnsResponse(null); // Reset previous answer
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await postVal(data);
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data) handleSubmit();
  }, [data]);

  useEffect(() => {
    if (response?.sessionId) fetchClue();
  }, [response]);

  const answerpost = async () => {
    try {
      const value = await postans(searchQuery, response.sessionId);
      setAnsResponse(value); // Removed unnecessary await
      setSearchQuery('');
    } catch (err) {
      setError(err.message);
    }
  };
  if (data === null) 
    return (
      <div className="flex items-center justify-center h-40 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md">
        First, select a challenge!
      </div>
    );
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-blue-500" />
        <p className="ml-3 text-lg font-semibold text-gray-700">Loading clue...</p>
      </div>
    );
  }
  if (error) return <div>Error: {error}</div>;
  if(ansresponse!=null){
  if (ansresponse.isGameCompleted) 
    return (
      <div>
          <div className="clue-icons">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="clue-icon">⬢</div>
            ))}
          </div>
          <p>{ansresponse.message}.Try other difficulty level</p>
          <div className="search-clue">
          </div>
          <NavLink to={''}>
          <button className="next-btn">
            OK
          </button>
          </NavLink>
        </div>
    );
  }
  return (
    <div className="clue-display">
      {ansresponse ? (
        // Show answer response when available
        <div>
          <div className="clue-icons">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="clue-icon">⬢</div>
            ))}
          </div>
          <p>{ansresponse.message}</p>
          <div className="search-clue">
          </div>
          <button className="next-btn" onClick={fetchClue}>
            {ansresponse.correct ? 'Next' : 'Try Again'}
          </button>
        </div>
      ) : (
        // Show regular clue interface
        <div>
          <div className="clue-icons">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="clue-icon">⬢</div>
            ))}
          </div>
          <p>{clue?.clue?.text || "No clue available"}</p>
          <div className="search-clue">
            <input 
              type="text" 
              placeholder="Search Clue Description" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="next-btn" onClick={answerpost}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default ClueDisplay;
