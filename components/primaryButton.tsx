import React from "react";
import Link from "next/link";

import styles from "../styles/primaryButton.module.scss";

export interface iPrimaryButtonProps {
  text: string;
  size: string;
  scale: number;
  to: string;
}

const PrimaryButton: React.FC<iPrimaryButtonProps> = ({
  text,
  size,
  scale,
  to,
}): JSX.Element => {
  return (
    <div
      className={styles.button}
      style={{ fontSize: size, transform: `scaleX(${scale})` }}
    >
      <span className={styles.buttonText}>
        <Link href={to}>{text}</Link>
      </span>
    </div>
  );
};

export default PrimaryButton;
