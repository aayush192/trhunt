import React from "react";
 const postVal=async(data)=>{
    const resp=await fetch(`https://trhuntapi-production.up.railway.app/api/game/start`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            gameId:data,
            playerId:Math.random()
          })
    })
    if(!resp.ok){
        throw new Error('server response is not ok')
    } 

    const value= await resp.json();
    console.log(value);
    return value.gameSession;
 }
 export default postVal;

 

