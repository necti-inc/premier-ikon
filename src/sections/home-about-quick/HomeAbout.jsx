import React from "react";
import styles from "./home-about.module.css";
import theme from "@/app/theme";

function HomeAbout() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: theme.black,
        borderBottomLeftRadius: theme.borderRadius,
        borderBottomRightRadius: theme.borderRadius,
      }}
    >
      <h2
        style={{ color: theme.lightTan, fontSize: theme.fontSizeM }}
        className={styles.header}
      >
        We Deliver Tailored Branding, Strategic Product Design, Custom Web-site
        Creation, Comprehensive Fulfillment, & Exceptional Customer Care. Your
        Ideal Partner for Seamless Merchandise Solutions in Sports, Creative
        Spaces, and Business.
      </h2>
    </div>
  );
}

export default HomeAbout;
