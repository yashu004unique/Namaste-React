import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
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
