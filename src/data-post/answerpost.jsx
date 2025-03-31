import React from "react";
 const postans=async(ans,response)=>{
    console.log(response,ans);
    const resp=await fetch('https://trhuntapi-production.up.railway.app/api/game/answer',{                                                                                                                                                                                                                                                                                                                                                                                                                               
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({answer:ans,sessionId:response.sessionId,gameId:response.gameId})
    }
    )
    if(!resp.ok){
        throw new Error('server response is not ok')
    } 
    const value=await resp.json();
    console.log(value);
    return value;
 };
 export default postans;