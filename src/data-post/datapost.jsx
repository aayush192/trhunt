import React from "react";
 const postVal=async(data)=>{
    const resp=await fetch(`https://trhuntapi-production.up.railway.app/api/game/start/10`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userId:data})
    })
    if(!resp.ok){
        throw new Error('server response is not ok')
    } 
    console.log(resp);
    return resp.json();
 }
 export default postVal;

 

