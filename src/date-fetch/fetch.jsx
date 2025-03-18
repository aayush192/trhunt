import React from "react";
<<<<<<< HEAD
import { useState } from "react";

const getData=async()=>{
    const response= await fetch('https://trhuntapi-production.up.railway.app')
    console.log(response.json());
}
export default getData;
=======

const getData=async(data)=>{
    const response= await fetch(`http://trhuntapi-production.up.railway.app/game/${data}`)
    console.log(response.json());
}
export default getData;
>>>>>>> commit changes
