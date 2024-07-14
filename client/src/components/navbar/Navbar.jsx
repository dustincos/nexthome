import { useContext, useState } from "react";
import "./navbar.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { updateUser, currentUser } = useContext(AuthContext);
  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);
  const navigate = useNavigate();
  const location = useLocation();

  if (currentUser) fetch();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const showDropdown = () => {
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  const handleMenuIconClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="NextHome Logo" />
          <span>NextHome</span>
        </a>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/list" className={location.pathname === '/list' ? 'active' : ''}>Available</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact us</Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user" onMouseLeave={hideDropdown}>
            <img
              src={currentUser.avatar || "/noavatar.jpg"}
              alt={currentUser.username}
              onClick={showDropdown}
              onMouseEnter={showDropdown}
            />
            {dropdownVisible && (
              <div className="dropdown">
                <Link to="/profile" className="profile">
                  {number > 0 && <div className="notification">{number}</div>}
                  <span>Profile</span>
                </Link>
                <button className="logout" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">Sign up</Link>
          </>
        )}
        <div className={`menuIcon ${open ? 'change' : ''}`} onClick={handleMenuIconClick}>
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/list" className={location.pathname === '/list' ? 'active' : ''}>Available</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact us</Link>
          {currentUser ? (
            <div>
            </div>
          ) : (
            <div className="ls-md">
              <Link to="/login">Sign in</Link>
              <Link to="/register" className="register">Sign up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
