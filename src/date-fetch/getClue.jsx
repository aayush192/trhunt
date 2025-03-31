import React from "react";
import { useState } from "react";

const getClue = async (resp) => {
  try {
    console.log(resp);
      const response = await fetch(`https://trhuntapi-production.up.railway.app/api/game/clue`,{
        method:"post",
         headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({sessionId:resp.sessionId,gameId:resp.gameId})
      }
      );
      
      if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const value = await response.json();
      console.log(value)
      return value.clue || []; // Return an empty array if `data` is undefined
  } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Return an empty array on failure
  }
};

export default getClue;

