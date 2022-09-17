import React, { useState } from "react";
import "./LandingPage.css";
import PlansPage from "./PlansPage";
import Overview from "./Overview";
import background from "../assets/bg-1.jpeg";
import { Button } from "reactstrap";
import Login from "./Login";

function LandingPage() {
  const [page, togglePage] = useState(1);
  return (
    <div>
      <div id="landing-page-container"></div>
      <img src={background} alt="bg" id="landing-page-bg" />
      <div id="landing-page-overlay" />
      <div className="all-center full flex-column" id="landing-page-content">
        <h1
          className="text-tertiary font-weight-bold"
          style={{ fontSize: "100px" }}
        >
          GeNFT
        </h1>
        <div className="bg-dark rounded-pill p-3">
          <div className="d-flex">
            <li className="text-primary">GENERATE</li>
            <li className="text-secondary mx-3">HODL</li>
            <li className="text-tertiary">SELL</li>
          </div>
        </div>
        {page === 2 && (
          <div>
            <Overview />
          </div>
        )}
        {page === 3 && (
          <div>
            <PlansPage />
          </div>
        )}{" "}
        {page === 4 && (
          <div>
            <Login />
          </div>
        )}
        {page <= 3 && (
          <Button
            style={{ width: "8vw" }}
            onClick={() => {
              togglePage(page + 1);
            }}
            color="primary"
            className="rounded-pill w-10 m-3"
          >
            {page === 1 && <>Start tour</>}
            {page === 2 && <>Next</>}
            {page === 3 && <>Next</>}
          </Button>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
