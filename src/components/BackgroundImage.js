import React from "react";

function BackgroundImage(props) {
  return (
    <img
      src={props.bg}
      alt="background"
      className="full"
      style={{ position: "relative" }}
    />
  );
}

export default BackgroundImage;
