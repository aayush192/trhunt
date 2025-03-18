import React from "react";


const getData=async(data)=>{
    const response= await fetch(`https://trhuntapi-production.up.railway.app/game/${data}`)
    console.log(response.json());
}
export default getData;

