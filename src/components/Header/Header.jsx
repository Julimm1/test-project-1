import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div className={s.wrapper}>
      <div>Routing</div>
      <div className={s.wrapperLinks}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/users" className={buildLinkClass}>
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
