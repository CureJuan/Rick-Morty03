import React from "react";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles["banner"]}>
      <div className={styles.content}>
        <h1>API</h1>
      </div>
    </div>
  );
};

export default Banner;
