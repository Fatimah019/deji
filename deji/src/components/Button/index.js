import React from "react";
import "./style.css";

const Button = ({ children, primary, secondary, onClick }) => {
  return (
    <button
      className={`button ${primary && "primary"} ${secondary && "secondary"} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
