import React from "react";
import styles from "./about-catalog.module.css";
import Image from "next/image";

import FI from "../../../public/AUP-top-banner.png";
import SI from "../../../public/AUP-second-banner.png";
import TI from "../../../public/AUP-third-banner.png";

function AboutCatalog() {
  return (
    <div className={styles.container}>
      <Image className={styles.banner} src={FI} alt={"First Image"} />
      <Image className={styles.banner} src={SI} alt={"Second Image"} />
      {/*<Image className={styles.banner} src={TI} alt={"Third Image"} />*/}
    </div>
  );
}

export default AboutCatalog;
