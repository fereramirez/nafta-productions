import React from "react";
import Image from "next/image";

import Logo from "./logo";

import styles from "../styles/footer.module.scss";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Logo />

      <div className={styles.cityContainer}>
        <p>USA</p>
        <p>NEW YORK</p>
      </div>

      <div className={styles.cityContainer}>
        <p>ARGENTINA</p>
        <p>BUENOS AIRES</p>
      </div>

      <div className={styles.cityContainer}>
        <p>JAPAN</p>
        <p>TOKIO</p>
      </div>

      <div className={styles.technologiesContainer}>
        <Image src="/typescript.svg" height={36} width={36} alt="TypeScript" />
        <Image src="/sass.svg" height={36} width={36} alt="Sass" />
        <Image src="/nextjs.svg" height={36} width={36} alt="NextJS" />
      </div>
    </footer>
  );
};

export default Footer;
