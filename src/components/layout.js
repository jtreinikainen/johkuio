import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import * as styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className={styles.container}>
      <Header title={data.site.siteMetadata.title} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
