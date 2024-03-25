import React from "react";
import styles from "./home-header.module.css";
import theme from "@/app/theme";
import ButtonGeneral from "@/components/button-general/ButtonGeneral";

function HomeHeader() {
  return (
    <div
      className={styles.container}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <video
        src="https://storage.cloud.google.com/premier_home_video/HP-background-video.mp4"
        autoPlay
        muted
        loop
        className={styles.backgroundVideo}
      ></video>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      ></div>
      <h1
        style={{
          fontSize: theme.fontSizeLHeader,
          color: theme.white,
          position: "relative",
          zIndex: 2,
        }}
        className={styles.title}
      >
        Crafting distinctive identities, your brand's vision, our creative
        mission.
      </h1>
      <div
        style={{
          fontSize: theme.fontSizeLHeader,
          position: "relative",
          zIndex: 2,
        }}
        className={styles.title}
      >
        <ButtonGeneral
          title={"BECOME A PARTNER"}
          boxColor={theme.white}
          buttonPath={"/contact"}
          style={{ position: "relative", zIndex: 2 }}
        />
      </div>
    </div>
  );
}

export default HomeHeader;
