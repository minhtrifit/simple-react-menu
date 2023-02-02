import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const { navOpen } = props;
  const navLinkClass = ({ isActive }) => {
    return isActive ? "nav-container nav-active" : "nav-container";
  };

  return (
    <div className={`nav ${navOpen ? "nav-open" : null}`}>
      <div className="nav-list">
        <NavLink className={navLinkClass} to="/">
          <i className="fa-solid fa-house nav-icon"></i>
          <p className="nav-text">Home</p>
        </NavLink>
        <NavLink className={navLinkClass} to="/news">
          <i className="fa-sharp fa-solid fa-bell nav-icon"></i>
          <p className="nav-text">News</p>
        </NavLink>
        <NavLink className={navLinkClass} to="/contact">
          <i className="fa-solid fa-message nav-icon"></i>
          <p className="nav-text">Conact</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
