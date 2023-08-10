import React from "react";
import "./Navbar.css";
import avatar from "./img/people.png";
function Navbar() {
  return (
    <>
      <nav>
        <div className="nav__first">
          <h1>
            <i class="fa-solid fa-snowflake"></i>
            R-face
          </h1>
          <div className="nav__search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search here"
            />
          </div>
          <ul>
            <li>
              <i class="fa-solid fa-house"></i>
            </li>
            <li>
              <i class="fa-solid fa-tags"></i>
            </li>
            <li>
              <i class="fa-solid fa-video"></i>
            </li>
            <li>
              <i class="fa-solid fa-user"></i>
            </li>
            <li>
              <i class="fa-solid fa-inbox"></i>
            </li>
          </ul>
        </div>
        <div className="nav__second">
          <li>
            <i class="fa-solid fa-bell"></i>
          </li>
          <li>
            <i class="fa-solid fa-message"></i>
          </li>
          <li>
            <i class="fa-solid fa-gear fa-spin"></i>
          </li>
          <div className="avatar__content">
            <img src={avatar} alt="avatar_content" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
