import React, { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar.js";
import ProfileInsight from "./ProfileInsight.js";
import { Row } from "reactstrap";
import "./Gallery.css";
import bg from "../assets/bg-blue.png";
import avatar1 from "../assets/avatar_0000.png";
import avatar2 from "../assets/avatar_0001.png";
import avatar3 from "../assets/avatar_0002.png";
import avatar4 from "../assets/avatar_0003.png";
import BackgroundImage from "./BackgroundImage.js";
import { getUser } from "../helpers/auth";

function Gallery() {
  const n = 3;
  const k = 3;
  const [userDetails, setUserDetails] = useState({});
  const [profileInsight, toggleProfileInsight] = useState(false);
  const nft = [avatar1, avatar2, avatar3, avatar4];
  useEffect(() => {
    setUserDetails(getUser());
  }, []);
  return (
    <div>
      <BackgroundImage bg={bg} />
      <div className="full" style={{ position: "absolute", top: 0 }}>
        <NavigationBar
          userDetails={userDetails}
          toggleProfileInsight={toggleProfileInsight}
          profileInsight={profileInsight}
        />
        <div className="all-center align-items-start">
          <ProfileInsight isOpen={profileInsight} userDetails={userDetails} />
          <div className="all-center flex-column" style={{}}>
            <div id="gallery-container">
              {[...Array(n)].map((e, i) => (
                <Row className="all-center mt-3">
                  {[...Array(k)].map((e, m) => (
                    <div
                      className={`gallery-nft-box mx-2  text-white all-center bg-dark ${
                        (m + 1 + i) % 2 === 0
                          ? "border-primary"
                          : "border-secondary"
                      } `}
                    >
                      <img
                        src={nft[m]}
                        alt="#"
                        style={{
                          height: "300px",
                          width: "300px",
                          borderRadius: "20px",
                        }}
                      />
                    </div>
                  ))}
                </Row>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
