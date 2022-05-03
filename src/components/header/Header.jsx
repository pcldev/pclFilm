import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/pclFilmMain.png";
import { useRef } from "react";
import { useEffect } from "react";
import FilmSearch from "../search/FilmSearch";

function Header(props) {
  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef?.current.classList.add("shrink");
      } else {
        headerRef?.current.classList.remove("shrink");
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
        <div className="header__nav">
          <FilmSearch />
        </div>
      </div>
    </div>
  );
}

export default Header;
