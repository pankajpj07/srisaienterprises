// NavItem.js
import React from "react";
import { Link } from "react-scroll";

export const NavItemDesktop = ({ to, label, offset }) => (
  <li className="semiBold font15 pointer">
    <Link
      activeClass="active"
      style={{ padding: "10px 15px", cursor: "pointer" }}
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
    >
      {label}
    </Link>
  </li>
);

export const NavItemMobile = ({
  to,
  label,
  sidebarOpen,
  toggleSidebar,
  offset,
}) => (
  <li className="semiBold font15 pointer">
    <Link
      onClick={() => toggleSidebar(!sidebarOpen)}
      activeClass="active"
      className="whiteColor"
      style={{ padding: "10px 15px" }}
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
    >
      {label}
    </Link>
  </li>
);
