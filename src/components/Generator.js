import NavigationBar from "./NavigationBar";
import ProfileInsight from "./ProfileInsight";
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { getUser, delUser } from "../helpers/auth";
import eye1 from "../assets/layers/Eyes/eye_1 1.png";
import eye2 from "../assets/layers/Eyes/eye_2 1.png";
import eye3 from "../assets/layers/Eyes/eye_3 1.png";
import eye4 from "../assets/layers/Eyes/eye_4 1.png";
import background1 from "../assets/layers/Backgrounds/Background1.png";
import background2 from "../assets/layers/Backgrounds/Background2.png";
import background3 from "../assets/layers/Backgrounds/Background3.png";
import char1 from "../assets/layers/Characters/face_1.png";
import char2 from "../assets/layers/Characters/face_2.png";
import char3 from "../assets/layers/Characters/face_3.png";
import char4 from "../assets/layers/Characters/face_4.png";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import Canvas from "./Canvas.js";
import { useNavigate } from "react-router-dom";

function CanvasGenerator({ b, c, e }) {
  // Importing Background Layers
  const backgrounds = [background1, background2, background3];
  // Importing Character Layers
  const chars = [char1, char2, char3, char4];
  // Importing Eyes Layers
  const eyes = [eye1, eye2, eye3, eye4];
  // Invoking a canvas instance with Background and multiple Foreground Layers.
  const draw = (context) => {
    // Background Layer
    var bg = new Image();
    bg.src = backgrounds[b];
    // Character Layer
    var char = new Image();
    char.src = chars[c];
    // Eyes Layer
    var eye = new Image();
    eye.src = eyes[e];
    char.onload = function () {
      context.drawImage(bg, 0, 0, 300, 300);

      context.drawImage(char, 0, 0, 300, 300);

      context.drawImage(eye, 0, 0, 300, 300);
    };
  };

  return <Canvas draw={draw} height={300} width={300} id="2" />;
}
function Generator() {
  const [userDetails, setUserDetails] = useState({});
  const [profileInsight, toggleProfileInsight] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    setUserDetails(getUser());
    // Return a random integer betwen 0 and 3.
    const randomArray = (length, max) =>
      [...new Array(length)].map(() => Math.round(Math.random() * max));
    let object = {};

    for (let i = 0; i < 5; i++) {
      object[`array${i + 1}`] = randomArray(3, 2);
    }
    setData(object);
  }, []);
  return (
    <div className="bg-overlay-dark full">
      {/* Navigation Bar  */}
      <NavigationBar
        userDetails={userDetails}
        toggleProfileInsight={toggleProfileInsight}
        profileInsight={profileInsight}
      />
      {/* Profile Modal  */}
      <ProfileInsight
        isOpen={profileInsight}
        userDetails={userDetails}
        delUser={delUser}
      />

      <div className="p-2">
        <div className="all-center in-between">
          <Button
            color="white"
            className="rounded-pill text-primary m-5"
            onClick={() => {
              navigate("/");
            }}
          >
            <ArrowBackIosNewIcon />
          </Button>
          <h1 className="text-white me-3">NFT Generator</h1>
          <AutoFixHighIcon className="text-white " />
        </div>

        <div className="">
          {Object.keys(data)?.map((element, id) => {
            console.log("element: ", element);
            return (
              // Invoking the Canvas Generator component
              <CanvasGenerator
                b={data[element][0]}
                c={data[element][1]}
                e={data[element][2]}
                key={element}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Generator;
