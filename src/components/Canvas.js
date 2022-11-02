import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Canvas = ({ draw, height, width, id }) => {
  const canvas = useRef();
  // Get image assets for projecting onto a canvas instance
  useEffect(() => {
    const context = canvas.current.getContext("2d");
    draw(context);
  });
  return (
    <canvas
      ref={canvas}
      height={height}
      width={width}
      className="m-2"
      onClick={() => {
        console.log(id);
      }}
    />
  );
};
Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
export default Canvas;
