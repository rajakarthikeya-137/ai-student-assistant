import React from "react";

function ModeSelector({ mode, setMode }) {

  return (

    <select
      value={mode}
      onChange={(e)=>setMode(e.target.value)}
      style={{
        padding:"10px",
        borderRadius:"6px",
        marginTop:"10px"
      }}
    >

      <option value="explain">Explain Concept</option>
      <option value="mcq">Generate MCQs</option>
      <option value="summarize">Summarize Text</option>
      <option value="improve">Improve Writing</option>

    </select>

  );
}

export default ModeSelector;