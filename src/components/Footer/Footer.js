import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
          Shahzaib Qadir
      </span>
      <div className="iconContainer">
        <a href="https://github.com/ShahzaibQadir" target="__blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/shahzaib-qadir-711315160/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        
      </div>
    </div>
  );
};

export default Footer;
