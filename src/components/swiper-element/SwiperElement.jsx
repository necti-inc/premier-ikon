"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./swiper-element.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import theme from "@/app/theme";

const HorizontalScroll = ({ items }) => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollButtons = () => {
    const { current: container } = containerRef;
    const isAtLeft = container.scrollLeft <= 0;
    const isAtRight =
      container.scrollLeft + container.offsetWidth >= container.scrollWidth;

    setCanScrollLeft(!isAtLeft);
    setCanScrollRight(!isAtRight);
  };

  useEffect(() => {
    checkScrollButtons();
    // Check on window resize to update button states
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, []);

  const scroll = (direction) => {
    const { current: container } = containerRef;
    const itemWidth = container.firstChild.offsetWidth; // Assuming all items have the same width
    const totalScrollWidth = itemWidth * items.length;

    if (direction === "left") {
      if (container.scrollLeft === 0) {
        // If at the start, jump to the end
        container.scrollTo({
          left: totalScrollWidth - itemWidth,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({ left: -itemWidth, behavior: "smooth" }); // Scroll one item width
      }
    } else {
      // 'right'
      if (container.scrollLeft + container.offsetWidth >= totalScrollWidth) {
        // If at the end, jump to the start
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: itemWidth, behavior: "smooth" }); // Scroll one item width
      }
    }
  };

  // Scroll event listener to update button state
  const onScroll = () => {
    checkScrollButtons();
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        ref={containerRef}
        onScroll={onScroll}
        className={styles.scrollContainer}
        style={{
          overflowX: "scroll",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
          display: "flex",
          flexWrap: "nowrap",
          width: "100vw", // Adjusted width
          paddingLeft: "5%", // Add padding to the left
          // maxWidth: "none", // Remove the maxWidth or adjust it accordingly
          margin: "0 auto",
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For Internet Explorer + Edge
          paddingBottom: "20px", // Keep if you want to push the scrollbar out of view
          marginBottom: "-20px", // Negative margin to hide the scrollbar
        }}
      >
        {items.map((item, index) => (
          <div key={index} style={{ flex: "0 0 auto", marginRight: "10px" }}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.iconContainer}>
        <button
          className={styles.leftButton}
          style={{ backgroundColor: theme.black }}
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
        >
          <FontAwesomeIcon
            style={{ color: theme.lightTan }}
            className={styles.icon}
            icon={faChevronLeft}
          />
        </button>
        <button
          className={styles.rightButton}
          style={{ backgroundColor: theme.black }}
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
        >
          <FontAwesomeIcon
            style={{ color: theme.lightTan }}
            className={styles.icon}
            icon={faChevronRight}
          />
        </button>
      </div>
    </div>
  );
};

export default HorizontalScroll;
