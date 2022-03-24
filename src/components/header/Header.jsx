import React from "react";
import "./Header.scss";
import { useLocation, Link, NavLink } from "react-router-dom";
import logo from "../../assets/pclfilm.png";
import { useRef } from "react";
import { useEffect } from "react";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

function Header(props) {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to="/">pclfilm</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((ele, index) => (
            <li key={index}>
              <NavLink
                to={ele.path}
                activeClassName={index === active ? "active" : ""}
              >
                {ele.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
