import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


import profile from "../../../assets/images/profile/pic1.jpg";
import avatar from "../../../assets/images/avatar/1.jpg";
import { ThemeContext } from "../../../context/ThemeContext";

const Header = ({ onNote, toggle, onProfile, onNotification, onClick }) => {
  const { background, changeBackground } = useContext(ThemeContext);
  const { logout, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  function ChangeMode() {
    if (background.value === "light") {
      changeBackground({ value: "dark", Label: "Dark" });
    } else {
      changeBackground({ value: "light", Label: "Light" });
    }
  }

  const handleLogout = () => {
  logout({
    logoutParams: {
      returnTo: `${window.location.origin}/page-login`,
    },
  });
};


  let path = window.location.pathname.split("/");
  let name = path[path.length - 1].split("-");
  let filterName =
    name.length >= 3 ? name.filter((n, i) => i > 0) : name;

  let finalName = filterName.includes("app")
    ? filterName.filter((f) => f !== "app")
    : filterName.includes("ui")
    ? filterName.filter((f) => f !== "ui")
    : filterName.includes("uc")
    ? filterName.filter((f) => f !== "uc")
    : filterName.includes("basic")
    ? filterName.filter((f) => f !== "basic")
    : filterName.includes("jquery")
    ? filterName.filter((f) => f !== "jquery")
    : filterName.includes("table")
    ? filterName.filter((f) => f !== "table")
    : filterName.includes("page")
    ? filterName.filter((f) => f !== "page")
    : filterName.includes("email")
    ? filterName.filter((f) => f !== "email")
    : filterName.includes("ecom")
    ? filterName.filter((f) => f !== "ecom")
    : filterName.includes("chart")
    ? filterName.filter((f) => f !== "chart")
    : filterName.includes("editor")
    ? filterName.filter((f) => f !== "editor")
    : filterName;

  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div
                className="dashboard_bar"
                style={{ textTransform: "capitalize" }}
              >
                {finalName.join(" ").length === 0
                  ? "Dashboard"
                  : finalName.join(" ")}
              </div>
            </div>

            <ul className="navbar-nav header-right">
              
              <li className="nav-item dropdown notification_dropdown">
                <div className="input-group search-area">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search Here"
                  />
                  <span className="input-group-text">
                    <i className="flaticon-381-search-2" />
                  </span>
                </div>
              </li>

              
              <li className="nav-item dropdown notification_dropdown">
                <Link
                  to="#"
                  className={`nav-link bell primary dz-theme-mode ${
                    background.value === "dark" ? "active" : ""
                  }`}
                  onClick={ChangeMode}
                >
                  <i id="icon-light" className="fas fa-sun" />
                  <i id="icon-dark" className="fas fa-moon" />
                </Link>
              </li>

              
              <Dropdown as="li" className="nav-item notification_dropdown">
                <Dropdown.Toggle className="nav-link primary icon-false">
                  <img src={avatar} width={20} alt="notification" />
                </Dropdown.Toggle>
              </Dropdown>

              
              <Dropdown as="li" className="nav-item dropdown header-profile">
                <Dropdown.Toggle
                  className="nav-link icon-false"
                  to="#"
                  as="div"
                >
                  <img
                    src={user?.picture || profile}
                    width={20}
                    alt="profile"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu
                  className="dropdown-menu dropdown-menu-right profile mt-2"
                  align="end"
                >
                  <Link to="/app-profile" className="dropdown-item ai-icon">
                    <span className="ms-2">Profile</span>
                  </Link>

                  <Link to="/email-inbox" className="dropdown-item ai-icon">
                    <span className="ms-2">Inbox</span>
                  </Link>

                  {isAuthenticated && (
                    <button
                      onClick={handleLogout}
                      className="dropdown-item ai-icon text-danger"
                      style={{ background: "none", border: "none" }}
                    >
                      <span className="ms-2">Logout</span>
                    </button>
                    
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;