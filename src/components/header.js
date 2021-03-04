import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/header.module.css";

const ListLink = ({ to, children }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={to}>{children}</Link>
  </li>
);

const Header = ({ title }) => (
  <div className={styles.header_container}>
    <h1>{title}</h1>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/about">About</ListLink>
      <ListLink to="/">Home</ListLink>
    </ul>
  </div>
);

export default Header;
