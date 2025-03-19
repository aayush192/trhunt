import React, { useEffect } from "react";
import userContext from "../context/Context";
import postVal from "../data-post/datapost";
import { useContext,useState } from "react";

const ClueDisplay = () => {
    const{data}=useContext(userContext);
    const[loading,setLoading]=useState(false);
    const [error, setError] = useState(null);
    const [response,setResponse]=useState(null);


    const handleSubmit=async()=>{
        setLoading(true);
        setError(null);
try{
        const response=await postVal(data);
        console.log(response);
     const value=await response.json();
     setResponse(value);
}catch(err){
setError(err.message)
}finally{
    setLoading(false);
}
}

useEffect(()=>{
  const fetchData=async()=>{
await handleSubmit();
 console.log(response);
  }
  fetchData();
},[])


  return (

    <div className="clue-display">
      <div className="clue-icons">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="clue-icon">⬢</div>
        ))}
      </div>
      <p>
        The description of the game to be played in the type item and questions asked and prize,
        the idea of the clue references of the clue and
      </p>
      <button className="next-btn">NEXT</button>
    </div>
  );
};

export default ClueDisplay;
