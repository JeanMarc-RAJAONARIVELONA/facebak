import React from "react";
import "./Button.css";
const Button = ({ value, color }) => {
  return <button className={color}>{value}</button>;
};

export default Button;
