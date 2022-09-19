import React, { useState } from "react";
import "./LandingPage.css";
import PlansPage from "./PlansPage";
import Overview from "./Overview";
import background from "../assets/bg-1.jpeg";
import { Button } from "reactstrap";
import Login from "./MetaMask";
import Tagline from "./Brand";
import BackgroundImage from "./BackgroundImage";

function LandingPage() {
  const [page, togglePage] = useState(1);
  return (
    <div>
      <div id="landing-page-container"></div>
      <BackgroundImage bg={background} />
      <div id="landing-page-overlay" />
      <div className="all-center full flex-column" id="landing-page-content">
        <Tagline />
        {page === 2 && (
          <div>
            <Overview />
          </div>
        )}
        {page === 3 && (
          <div>
            <PlansPage />
          </div>
        )}
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
