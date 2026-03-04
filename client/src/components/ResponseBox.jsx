import React from "react";

function ResponseBox({ loading, result }) {

  if (loading) {
    return (
      <div className="response-box">
        ⏳ Generating response...
      </div>
    );
  }

  return (
    <div className="response-box">
      {result}
    </div>
  );
}

export default ResponseBox;