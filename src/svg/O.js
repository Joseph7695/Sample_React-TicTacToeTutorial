import React from "react";
function O(props) {
  let stroke_color = props.winningSquare ? "#f00" : "#00f";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <circle
        className="O__circle"
        stroke={stroke_color}
        fill="none"
        cx="128"
        cy="128"
        r="103"
      />
    </svg>
  );
}

export default O;
