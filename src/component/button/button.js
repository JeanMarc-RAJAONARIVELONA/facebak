import React from "react";
import "./Button.css";
const Button = ({ value, color }) => {
  return (
    <button value={value} color={color} className="btn">
      {value}
    </button>
  );
};

export default Button;
