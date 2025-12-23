import { LOGO_URL } from "../utils/constant";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
