import React, { useState } from "react";
import PromptInput from "../components/PromptInput";
import ModeSelector from "../components/ModeSelector";
import ResponseBox from "../components/ResponseBox";
import { generateAI } from "../services/api";

function Home(){

  const [prompt,setPrompt] = useState("");
  const [mode,setMode] = useState("explain");
  const [result,setResult] = useState("");
  const [loading,setLoading] = useState(false);

  const handleGenerate = async ()=>{

    if(!prompt) return;

    setLoading(true);

    try{

      const response = await generateAI(prompt,mode);

      setResult(response);

    }catch(err){

      setResult("Error generating response");

    }

    setLoading(false);
  };

  return(

    <div className="container">

      <h1>AI Student Assistant</h1>

      <p>Ask a question and let AI help you learn.</p>

      <PromptInput prompt={prompt} setPrompt={setPrompt}/>

      <ModeSelector mode={mode} setMode={setMode}/>

      <button className="generate-btn" onClick={handleGenerate}>
        Generate Response
      </button>

      <ResponseBox loading={loading} result={result}/>

    </div>

  );
}

export default Home;