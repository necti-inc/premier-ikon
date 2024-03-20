import React from "react";
import styles from "./button-general.module.css";
import theme from "@/app/theme";
import Link from "next/link";

function ButtonGeneral(props) {
  return (
    <Link href={props.buttonPath}>
      <div
        className={styles.container}
        style={{
          backgroundColor: props.boxColor,
          borderRadius: theme.borderRadiusButton,
        }}
      >
        <h3
          style={{ color: props.titleColor, fontSize: theme.fontSizeButton }}
          className={styles.header}
        >
          {props.title}
        </h3>
      </div>
    </Link>
  );
}

export default ButtonGeneral;
