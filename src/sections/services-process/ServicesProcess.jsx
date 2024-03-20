import React from "react";
import styles from "./services-process.module.css";
import theme from "@/app/theme";
import Theme from "@/app/theme";

function ServicesProcess() {
  return (
    <div className={styles.container} style={{ backgroundColor: theme.black }}>
      <h3
        className={styles.header}
        style={{ color: theme.lightTan, fontSize: theme.fontSizeL }}
      >
        What our process looks like
      </h3>
      <div className={styles.lowerContainer}>
        <div className={styles.leftContainer}>
          <h4
            className={styles.lowerHeader}
            style={{ color: theme.primaryColor, fontSize: theme.fontSizeS }}
          >
            Communicative Approach
          </h4>
          <p
            className={styles.lowerDescription}
            style={{ color: theme.lightTan, fontSize: theme.fontSizeXS }}
          >
            communication is the cornerstone of our process. From our initial
            discussion to the final approval, we emphasize clarity and
            transparency. Managing expectations and maintaining alignment at
            every stage is crucial. to ensure peace of mind, fostering a
            foundation of trust, collaboration, and an exceptional working
            experience for our clients.
          </p>
        </div>
        <div className={styles.rightContainer}>
          {" "}
          <h4
            className={styles.lowerHeader}
            style={{ color: theme.primaryColor, fontSize: theme.fontSizeS }}
          >
            Collaborative Journey
          </h4>
          <p
            className={styles.lowerDescription}
            style={{ color: theme.lightTan, fontSize: theme.fontSizeXS }}
          >
            Your project is a partnership. You bring expertise in your domain,
            and we bring our creative vision to the table. Your insights about
            your brand are invaluable. At Premier Ikon, we apply proven design
            principles tailored to your unique challenges and needs. This isn't
            a one-size-fits-all approach; it's a bespoke journey to meet your
            specific goals and objectives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesProcess;
