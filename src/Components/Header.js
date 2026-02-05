import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [bttn, setBttn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log("header rendered");
  return (
    <div className="header-container flex justify-between items-center pr-6">
      <div className="logo-container">
        <img className="logo w-48" alt="logo-image" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex gap-5 justify-center text-2xl font-semibold">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <button
            className="bg-gray-100 w-24 p-0.5 rounded-xl  border border-black cursor-pointer"
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
