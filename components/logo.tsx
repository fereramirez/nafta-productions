import React from "react";

import styles from "../styles/logo.module.scss";

type Props = {};

const Logo: React.FC = (): JSX.Element => {
  return (
    <div className={styles.logoContainer}>
      <p>
        <span className={styles.naf}>NAF</span>
        <span className={styles.ta}>TA</span>
      </p>
    </div>
  );
};

export default Logo;
