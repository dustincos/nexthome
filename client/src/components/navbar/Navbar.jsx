import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  
  const { updateUser, currentUser } = useContext(AuthContext);
  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

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

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="NextHome Logo" />
          <span>NextHome</span>
        </a>
        <a href="/">Home</a>
        <a href="/list">Available</a>
        <a href="/about">About</a>
        <a href="/contact">Contact us</a>
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
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="Menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/list">Available</a>
          <a href="/about">About</a>
          <a href="/contact">Contact us</a>
          {currentUser ? (
            <div>
            </div>
          ) : (
            <>
              <a href="/login">Sign in</a>
              <a href="/register" className="register">
                Sign up
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
