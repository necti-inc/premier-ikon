import React from "react";
import theme from "@/app/theme";
import styles from "./home-sets-us-apart.module.css";
import BoxService from "@/components/box-service/BoxService";
import ButtonText from "@/components/button-text/ButtonText";
import Image from "next/image";

import TLB from "../../../public/SUP-top-left-bubble.png";
import BRB from "../../../public/SUP-bottom-right-bubble.png";

function HomeSetsUsApart() {
  return (
    <div className={styles.container}>
      <Image src={TLB} alt={"top bubble"} className={styles.imageBackground} />
      <Image
        src={BRB}
        alt={"bottom bubble"}
        className={styles.imageBackgroundBottom}
      />
      <h3
        className={styles.header}
        style={{ color: theme.black, fontSize: theme.fontSizeL }}
      >
        what sets us apart from the competition
      </h3>

      <div className={styles.servicesContainer}>
        <div className={styles.serviceContainer}>
          <BoxService
            title={
              <p>
                <b>Customer</b> service
              </p>
            }
            image={"/SUP-customer-service.png"}
          />
          <BoxService
            title={
              <p>
                <b>Fulfillment</b> & logistics
              </p>
            }
            image={"/SUP-fulfillment-logistics.png"}
          />
          <BoxService
            title={
              <p>
                <b>product</b> development
              </p>
            }
            image={"/SUP-product-development.png"}
          />
          <BoxService
            title={
              <p>
                <b>events</b> & pop up shops
              </p>
            }
            image={"/SUP-events-popup.png"}
          />
          <BoxService
            title={
              <p>
                <b>product</b> sourcing
              </p>
            }
            image={"/SUP-product-sourcing.png"}
          />
          <BoxService
            title={
              <p>
                <b>graphic</b> designs
              </p>
            }
            image={"/SUP-graphic-designs.png"}
          />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <ButtonText
          buttonTitle={"Explore our services"}
          buttonPath={"/services"}
        />
      </div>
    </div>
  );
}

export default HomeSetsUsApart;
