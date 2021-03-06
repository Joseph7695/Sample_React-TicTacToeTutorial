import React from "react";
function X(props) {
  let stroke_color = props.winningSquare ? "#f00" : "#0f0";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <g>
        <path className="X__line" stroke={stroke_color} d="M228 28 28 228" />
        <path className="X__line" stroke={stroke_color} d="M28 28 228 228" />
      </g>
    </svg>
  );
}

export default X;
