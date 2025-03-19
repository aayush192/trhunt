import React from "react";
import { useState } from "react";
import userContext from "./Context";
const Provider=({children})=>{
    const [data,setData]=useState(null);
    const[val,setVal]=useState(null)
    return(
 <userContext.Provider value={{data,setData,val,setVal}}>
    {children}
 </userContext.Provider>
    )
}
export default Provider;