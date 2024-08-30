import "./navbar.css";
import * as common from "../../common/common";

import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Navbar({
  nameWebsite,
  menuItem,
  indexLinkActive,
  contentBtn,
}) {
  function displayNav() {
    document
      .getElementsByClassName("ulSmallSreen")[0]
      .classList.toggle("active");
  }

  const allNavLinks = menuItem.map(function (item, index) {
    return (
      <li key={index}>
        <NavLink
          to={item === "Home" ? "/" : common.stringWitoutSpace(item)}
          className={({ isActive }) => {
            return isActive ? "activeNav" : "";
          }}
        >
          {item}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      <nav className="navbar">
        <div className="bigScreenContainer">
          <h1>{nameWebsite}</h1>

          <div className="block">
            <div className="ulLargeScreen">
              <ul>
                {allNavLinks}
                <li>
                  <button>{contentBtn}</button>
                </li>
              </ul>
            </div>
            <button className="icon" onClick={displayNav}>
              <FaBars />
            </button>
          </div>
        </div>

        <div className="ulSmallSreen">
          <ul>
            {allNavLinks}
            <li>
              <a href="#">{contentBtn}</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
