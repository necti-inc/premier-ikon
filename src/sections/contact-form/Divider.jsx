import React from "react";
import styles from "./contact-form.module.css";
import theme from "@/app/theme";

function Divider() {
  return <div style={{ borderColor: theme.grey }} className={styles.divider} />;
}

export default Divider;
