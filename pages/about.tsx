import { NextPage } from "next";
import Head from "next/head";

import NavBar from "../components/nav";
import PrimaryButton from "../components/primaryButton";

import styles from "../styles/about.module.scss";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About NAFTA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.container}>
        <p>
          This project was just an excuse to start with TypeScript, NextJS and
          Sass.
        </p>
        <p>The videos and design are not mine, I took them from </p>
        <p className={styles.externalSites}>
          <a
            href="https://migrantecontent.com/"
            target="_blank"
            rel="noreferrer"
          >
            MIGRANTE
          </a>{" "}
          and{" "}
          <a href="https://fardo.com.ar/" target="_blank" rel="noreferrer">
            FARDO
          </a>
          .
        </p>

        <div className={styles.contact}>
          <a
            href="https://www.linkedin.com/in/fernando-e-ramirez/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <a
            href="https://fernando-ramirez.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            PORTFOLIO
          </a>
          <a
            href="https://github.com/fereramirez/nafta-productions"
            target="_blank"
            rel="noreferrer"
          >
            REPOSITORY
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
