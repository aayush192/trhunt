import React from "react";


const getData=async(data)=>{
    const response= await fetch(`http://trhuntapi-production.up.railway.app/game/${data}`)
    console.log(response.json());
}
export default getData;

