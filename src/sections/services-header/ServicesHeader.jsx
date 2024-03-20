import React from "react";
import styles from "./services-header.module.css";
import theme from "@/app/theme";
import Image from "next/image";

import BRC from "../../../public/SP-header-curve.png";

function ServicesHeader() {
  return (
    <div className={styles.container}>
      <Image
        src={BRC}
        alt={"bottom bubble"}
        className={styles.imageBackgroundBottom}
      />
      <h3
        className={styles.header}
        style={{ color: theme.black, fontSize: theme.fontSizeL }}
      >
        Our Services
      </h3>
      <h2
        style={{ fontSize: theme.fontSizeDescription, color: theme.black }}
        className={styles.description}
      >
        At Premier Ikon, excellence in service is our passion.
        <br />
        <br />
        Our Services page is a testament to this commitment — a window into the
        diverse, expert solutions we provide. From innovative branding to
        meticulous product design, trademarking, and beyond, each service is a
        pillar of our dedication to your brand's success.
        <br />
        <br />
        We're proud to offer a spectrum of services, each infused with
        creativity and precision, tailored to elevate your brand. Immerse
        yourself in our offerings and discover how we're redefining the art of
        branding and design.
      </h2>
    </div>
  );
}

export default ServicesHeader;
