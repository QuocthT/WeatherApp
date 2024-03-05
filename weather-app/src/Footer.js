// Footer.js
import React from "react";
import "./Footer.css"; // Create this file next

function Footer() {
  return (
    <footer className="app-footer">
      {
        <>
          <button className="footer-button">Button 1</button>
          <button className="footer-button">Button 2</button>
          <button className="footer-button">Button 3</button>
        </>
      }
    </footer>
  );
}

export default Footer;
