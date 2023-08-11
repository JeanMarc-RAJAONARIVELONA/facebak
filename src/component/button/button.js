import React from "react";
import "./Button.css";
const Button = ({ value, color }) => {
  return <button className={"btn-" + color}>{value}</button>;
};

export default Button;
