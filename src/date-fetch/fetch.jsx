import React from "react";
import { useState } from "react";

const getData=async()=>{
    const response= await fetch('https://trhuntapi-production.up.railway.app')
    console.log(response.json());
}
export default getData;