"use client";

import React, { useState } from "react";
import styles from "./dropdown-faq.module.css";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import theme from "@/app/theme";

function DropdownFaq(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <button
      onClick={toggleOpen}
      style={{ cursor: "pointer" }}
      className={styles.outerContainer}
    >
      <div
        className={styles.container}
        style={{ borderColor: theme.primaryColor }}
      >
        <div className={styles.headerContainer}>
          <div className={styles.header} style={{ fontSize: theme.fontSizeM, color: theme.black }}>
            {props.faqQuestion}
          </div>
          <span className={styles.icon}>
            {isOpen ? (
              <FontAwesomeIcon
                style={{ color: theme.primaryColor }}
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon
                style={{ color: theme.primaryColor }}
                icon={faChevronDown}
              />
            )}
          </span>
        </div>

        {isOpen && (
          <p
            className={styles.description}
            style={{ fontSize: theme.fontSizeXS, color: theme.black }}
          >
            {props.faqAnswer}
          </p>
        )}
      </div>
    </button>
  );
}

export default DropdownFaq;
