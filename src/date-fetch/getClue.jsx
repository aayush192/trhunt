import React from "react";
import { useState } from "react";

const getClue = async (sessionId) => {
  try {
      const response = await fetch(`https://trhuntapi-production.up.railway.app/api/game/clue/${sessionId}`);
      
      if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const value = await response.json();
      console.log(value)
      return value.data || []; // Return an empty array if `data` is undefined
  } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Return an empty array on failure
  }
};

export default getClue;

