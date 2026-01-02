import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [bttn, setBttn] = useState("Login");
  console.log("header rendered");
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" alt="logo-image" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <button
            onClick={() => {
              bttn === "Login" ? setBttn("Logout") : setBttn("Login");
            }}
          >
            {bttn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
