import React from "react";

function Tagline() {
  return (
    <div>
      <h1
        className="text-tertiary font-weight-bold"
        style={{ fontSize: "100px" }}
      >
        GeNFT
      </h1>
      <div className="bg-dark rounded-pill p-3 ">
        <div className="all-center">
          <li className="text-primary">GENERATE</li>
          <li className="text-secondary mx-3">HODL</li>
          <li className="text-tertiary">SELL</li>
        </div>
      </div>
    </div>
  );
}

export default Tagline;
