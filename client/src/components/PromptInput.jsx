import React from "react";

function PromptInput({ prompt, setPrompt }) {

  return (

    <textarea
      rows="6"
      placeholder="Ask your question here..."
      value={prompt}
      onChange={(e)=>setPrompt(e.target.value)}
      style={{
        width:"100%",
        padding:"12px",
        borderRadius:"8px",
        border:"1px solid #ddd",
        fontSize:"15px"
      }}
    />

  );
}

export default PromptInput;