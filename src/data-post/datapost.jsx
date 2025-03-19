import React from "react";
 const postVal=async(data)=>{
    const resp=await fetch(`https://trhuntapi-production.up.railway.app/game/start/${data}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({type:data})
    })
    if(!resp.ok){
        throw new Error('server response is not ok')
    } 
    console.log(resp);
    return resp;
 }
 export default postVal;

 

