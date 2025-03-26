import React, { useEffect, useState } from "react";
import userContext from "../context/Context";
import { useNavigate } from "react-router-dom";
import postVal from "../data-post/datapost";
import postans from "../data-post/answerpost";
import { FaPuzzlePiece, FaGem, FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useContext } from "react";
import getClue from "../date-fetch/getClue";

const ClueDisplay = () => {
  const { data, setData, response, setResponse, ansresponse, setAnsResponse } = useContext(userContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [clue, setClue] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const navigate = useNavigate();
  
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
      setData(null);
    }
  };

  useEffect(() => {
    if (data != null) handleSubmit();
  }, []);

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

  if (data === null && response === null) 
    return (
      <div className="flex items-center justify-center h-40 text-lg font-semibold text-gray-700 bg-white rounded-lg shadow-lg">
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

  if (ansresponse?.isGameComplete) 
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
      <div className="flex justify-center gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="text-yellow-500 text-2xl">⬢</div>
        ))}
      </div>
      <p className="text-gray-700 text-lg font-medium">
        {ansresponse.message}. Try another difficulty level.
      </p>
      <div className="mt-4">
        <button 
          className="w-32 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md transition-all duration-300 hover:bg-blue-600 hover:scale-105" 
          onClick={() => navigate("/")}
        >
          OK
        </button>
      </div>
    </div>
    
    );

  return (
    <div className="clue-display p-6 bg-gray-50 rounded-lg shadow-md">
      {ansresponse ? (
        // Show answer response when available
        <div>
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="text-yellow-500 text-2xl">⬢</div>
            ))}
          </div>
          <p className="text-gray-700 text-lg font-medium">{ansresponse.message}</p>
          <div className="mt-4 text-center">
            <button 
              className="w-32 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition"
              onClick={fetchClue}
            >
              {ansresponse.correct ? 'Next' : 'Try Again'}
            </button>
          </div>
        </div>
      ) : (
        // Show regular clue interface
        <div>
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="text-yellow-500 text-2xl">⬢</div>
            ))}
          </div>
          <p className="text-gray-700 text-lg font-medium">{clue?.clue?.text || "No clue available"}</p>
          <div className="mt-4">
            <input 
              type="text" 
              className="w-full p-2 rounded-md border border-gray-300 mt-2"
              placeholder="Guess the word" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="mt-4 text-center">
            <button 
              className="w-32 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition"
              onClick={() => {
                if (searchQuery !== '') {
                  answerpost();
                } else {
                  alert("Please enter an answer before submitting!");
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClueDisplay;
