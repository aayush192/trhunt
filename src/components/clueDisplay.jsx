import React, { useEffect, useState, useContext } from "react";
import userContext from "../context/Context";
import { useNavigate } from "react-router-dom";
import postVal from "../data-post/datapost";
import postans from "../data-post/answerpost";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
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
        setAnsResponse(null);
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
      setAnsResponse(value);
      setSearchQuery('');
    } catch (err) {
      setError(err.message);
    }
  };

  // No Challenge Selected State
  if (data === null && response === null) {
    return (
      <div className="min-h-[70vh] overflow-auto bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 flex items-center justify-center p-8">
        <div className="max-w-md mx-auto p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl text-center transform hover:scale-105 transition-all duration-300">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            No Challenge Selected!
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Head back and pick an epic challenge to begin your journey.
          </p>
          <button
            className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => navigate('/')}
          >
            Select Challenge
          </button>
        </div>
      </div>
    );
  }

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 flex justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin text-6xl text-indigo-600" />
        <p className="ml-4 text-2xl font-bold text-gray-800">Unveiling Your Clue...</p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 flex items-center justify-center p-8">
        <div className="p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl text-center">
          <p className="text-xl font-semibold text-red-500">Error: {error}</p>
          <button
            className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
            onClick={() => fetchClue()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Main UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 flex items-center justify-center p-8">
      <div className="max-w-lg w-full p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-indigo-200 transform transition-all duration-300 hover:shadow-2xl">
        {ansresponse ? (
          <div className="text-center">
            <p className="text-xl font-semibold text-indigo-600 bg-indigo-100 px-4 py-2 rounded-full">
              {ansresponse.message}
            </p>
            <button
              className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={fetchClue}
            >
              {ansresponse.correct ? 'Next Clue' : 'Try Again'}
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Clue:</h3>
            <p className="text-lg font-medium text-indigo-600 bg-indigo-100 px-4 py-2 rounded-lg shadow-inner">
              {clue?.clue?.text || "No clue available"}
            </p>
            <div className="mt-6">
              <input
                type="text"
                className="w-full p-3 rounded-full border border-indigo-300 bg-indigo-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition-all duration-200"
                placeholder="Enter your guess..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => {
                if (searchQuery !== '') {
                  answerpost();
                } else {
                  alert("Please enter an answer before submitting!");
                }
              }}
              disabled={searchQuery === ''}
            >
              Submit Answer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClueDisplay;