import React from "react";
import styles from "./button-text.module.css";
import theme from "@/app/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function ButtonText(props) {
  return (
    <Link href={props.buttonPath}>
      <div className={styles.container}>
        <h3
          className={styles.title}
          style={{ fontSize: theme.fontSizeButtonText }}
        >
          {props.buttonTitle}
        </h3>
        <FontAwesomeIcon
          style={{
            color: theme.primaryColor,
            fontSize: theme.fontSizeButtonIcon,
          }}
          className={styles.buttonIcon}
          icon={faArrowRight}
        />
      </div>
    </Link>
  );
}

export default ButtonText;
