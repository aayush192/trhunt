import React from "react";
 const postans=async(ans,sessionId)=>{
    const resp=await fetch(`https://trhuntapi-production.up.railway.app/api/game/answer/${sessionId}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({answer:ans})
    })
    if(!resp.ok){
        throw new Error('server response is not ok')
    } 
    const value=await resp.json();
    console.log(value);
    return value.data;
 }
 export default postans;