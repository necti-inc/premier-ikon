import React from "react";
import styles from "./about-header.module.css";
import theme from "@/app/theme";

function AboutHeader() {
  return (
    <div
      style={{
        backgroundImage: `url(/AUP-header-background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "750px",
        width: "auto",
      }}
      className={styles.container}
    >
      <h3
        className={styles.header}
        style={{ color: theme.white, fontSize: theme.fontSizeL }}
      >
        about premier ikon
      </h3>
      <h2
        style={{ fontSize: theme.fontSizeDescription, color: theme.white }}
        className={styles.description}
      >
        At Premier Ikon, we believe in the power of collaboration.
        <br />
        <br />
        Our Partners page is a celebration of this belief — a showcase of the
        dynamic relationships we've built with creators, athletes, and
        companies. Each partnership is a testament to our commitment to
        excellence, innovation, and mutual growth.
        <br />
        <br />
        We're proud to work with a diverse array of talents, each bringing their
        unique vision and passion to our collaborative projects. Explore our
        partnerships and see how together, we're shaping the future of branding
        and design.
      </h2>
    </div>
  );
}

export default AboutHeader;
