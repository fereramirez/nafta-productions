import React from "react";
import Link from "next/link";

import Logo from "./logo";

import styles from "../styles/navbar.module.scss";

const NavBar: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Logo />
      </Link>
    </div>
  );
};

export default NavBar;
