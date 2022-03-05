import React from "react";
import "./style.css";

const Loader = ({ visible }) => {
  if (visible) return <div className="loader">loading</div>;
};

export default Loader;
