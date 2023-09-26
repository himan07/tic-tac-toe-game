import React from "react";
import "../css/main.css";

const Block = ({ value, onClick }) => {
  return (
    <div className="block">
      <button className={value === "x" ? "box x" : "box o"} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Block;
