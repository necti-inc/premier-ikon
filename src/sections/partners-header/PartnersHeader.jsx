import React from "react";
import styles from "./partners-header.module.css";
import theme from "@/app/theme";
import BoxService from "@/components/box-service/BoxService";
import ButtonText from "@/components/button-text/ButtonText";
import Image from "next/image";

import BRC from "../../../public/PP-bottom-right-curve.png";
import TLC from "../../../public/PP-top-left-curve.png";

function PartnersHeader() {
  return (
    <div className={styles.container}>
      <Image
        src={TLC}
        alt={"bottom curve"}
        className={styles.imageBackground}
      />
      <Image
        src={BRC}
        alt={"bottom curve"}
        className={styles.imageBackgroundBottom}
      />
      <h3
        className={styles.header}
        style={{ color: theme.black, fontSize: theme.fontSizeL }}
      >
        Our Partners
      </h3>
      <h2
        style={{ fontSize: theme.fontSizeDescription }}
        className={styles.description}
      >
        At Premier Ikon, we believe in the power of collaboration.
        <br />
        <br />
        Our Partners page is a celebration of this belief — a showcase of the
        dynamic relationships we've built with creators, athletes, and
        companies. Each partnership is a testament to our commitment to
        excellence, innovation, and mutual growth.
        <br />
        <br />
        We're proud to work with a diverse array of talents, each bringing their
        unique vision and passion to our collaborative projects. Explore our
        partnerships and see how together, we're shaping the future of branding
        and design.
      </h2>
      <div className={styles.partnersContainer}>
        <div className={styles.serviceContainer}>
          <BoxService
            title={
              <p>
                <b>Legends media</b>
              </p>
            }
            image={"/PP-legends.png"}
          />
          <BoxService
            title={
              <p>
                <b>kkfit</b>
              </p>
            }
            image={"/PP-kkfit.png"}
          />
          <BoxService
            title={
              <p>
                <b>hartford ltd.</b>
              </p>
            }
            image={"/PP-hartford.png"}
          />
          <BoxService
            title={
              <p>
                <b>The Heart of David</b>
              </p>
            }
            image={"/PP-heart-of-david.png"}
          />
          <BoxService
            title={
              <p>
                <b>LZMFG</b>
              </p>
            }
            image={"/PP-lzmfg.png"}
          />
          <BoxService
            title={
              <p>
                <b>Lonnie Walker</b>
              </p>
            }
            image={"/PP-lonnie-walker.png"}
          />
          <BoxService
            title={
              <p>
                <b>Atomic Golf</b>
              </p>
            }
            image={"/PP-atomic-golf.png"}
          />
          <BoxService
            title={
              <p>
                <b>Impact Pest Pros</b>
              </p>
            }
            image={"/PP-impact-pest-pros.png"}
          />
          <BoxService
            title={
              <p>
                <b>ATLA</b>
              </p>
            }
            image={"/PP-atla.png"}
          />
          <BoxService
            title={
              <p>
                <b>Parkway USA</b>
              </p>
            }
            image={"/PP-parkway.png"}
          />
          <BoxService
            title={
              <p>
                <b>WD Detailing</b>
              </p>
            }
            image={"/PP-kkfit.png"}
          />
          <BoxService
            title={
              <p>
                <b>Socal Solar Pro</b>
              </p>
            }
            image={"/PP-socal-solar-pros.png"}
          />
        </div>
        <div className={styles.buttonContainer}>
          <ButtonText
            buttonTitle={"Become a Partner"}
            buttonPath={"/contact"}
          />
        </div>
      </div>
    </div>
  );
}

export default PartnersHeader;
