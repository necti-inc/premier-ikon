import React from "react";
import theme from "@/app/theme";
import styles from "./services-call-to-action.module.css";
import ButtonGeneral from "@/components/button-general/ButtonGeneral";
import Image from "next/image";

import BRC from "../../../public/SP-lower-curve.png";

function ServicesCallToAction() {
  return (
    <div
      style={{
        backgroundColor: theme.lightTan,
        borderRadius: theme.borderRadius,
      }}
      className={styles.container}
    >
      <Image
        src={BRC}
        alt={"bottom curve"}
        className={styles.imageBackground}
      />
      <h2
        style={{ color: theme.black, fontSize: theme.fontSizeM }}
        className={styles.header}
      >
        Ready to level up your business? Let’s get started today through a
        collaborative and creative process that sets you up for success.
      </h2>
      <ButtonGeneral
        title={"kickoff your business"}
        titleColor={theme.black}
        boxColor={theme.primaryColor}
        buttonPath={"/contact"}
      />
    </div>
  );
}

export default ServicesCallToAction;
