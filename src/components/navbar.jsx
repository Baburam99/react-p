import React, { useState } from "react";
import "./nav.css";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    console.log("toggling nav:", !isNavOpen);
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="navbar">
        <label>Adhikari Yash</label>
        <ul className="navlist">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="open" onClick={toggleNav}>
          {isNavOpen ? "✖️" : "Menu"}
        </button>
      </nav>

      {/* Hidden menu */}
      <ul id="hidden" className={`hidden ${isNavOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </>
  );
}

export default Nav;
