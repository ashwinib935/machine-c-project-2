import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const handleIsActive = ({ isActive }) => ({
    color: isActive ? "red" : "",
    fontWeight: isActive ? "600" : "200",
  });

  return (
    <div>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          backgroundColor: "skyblue",
          padding: "1rem",
        }}
      >
        <NavLink to="/" style={handleIsActive}>
          Home
        </NavLink>
        <NavLink to="/archive" style={handleIsActive}>
          Archive
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
