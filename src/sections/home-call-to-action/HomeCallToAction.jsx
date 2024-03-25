import React from "react";
import styles from "./home-call-to-action.module.css";
import theme from "@/app/theme";
import ButtonGeneral from "@/components/button-general/ButtonGeneral";

function HomeCallToAction() {
  return (
    <div
      style={{ backgroundColor: theme.black, borderRadius: theme.borderRadius }}
      className={styles.container}
    >
      <h2
        style={{ color: theme.lightTan, fontSize: theme.fontSizeM }}
        className={styles.header}
      >
        Ready to level up your business? Let’s get started today through a
        collaborative and creative process that sets you up for success.
      </h2>
      <ButtonGeneral
        title={"kickoff your business"}
        titleColor={theme.lightTan}
        boxColor={theme.primaryColor}
        buttonPath={"/contact"}
      />
    </div>
  );
}

export default HomeCallToAction;
