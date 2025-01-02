import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">ALL Right reserved &copy;SAGAR</h4>
      <p className="text-center mt-3"></p>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/policy">privacy Policy</Link>

    </div>
  );
};

export default Footer;
