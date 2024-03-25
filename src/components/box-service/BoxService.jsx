import React from "react";
import styles from "./box-service.module.css";
import theme from "@/app/theme";
import Image from "next/image";

function BoxService(props) {
  return (
      <a href={props.reference} target={"_blank"}>
        <div
          style={{
            borderRadius: theme.borderRadius,
            fontSize: theme.fontSizeBox,
            color: theme.white,
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={styles.container}
        >
          {props.title}
        </div>
      </a>
  );
}

export default BoxService;
