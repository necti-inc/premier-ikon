import React from "react";
import styles from "./home-our-partners.module.css";
import theme from "@/app/theme";
import SwiperClients from "@/components/swiper-clients/SwiperClients";
import ButtonText from "@/components/button-text/ButtonText";
import Image from "next/image";

import BLC from "../../../public/HP-partners-curve.png";
import HorizontalScroll from "@/components/swiper-element/SwiperElement";
import BoxService from "@/components/box-service/BoxService";

function HomeOurPartners() {
  const items = [
    ["Legends Media", "/PP-legends.png"],
    ["kkfit", "/PP-kkfit.png"],
    ["hartford ltd.", "/PP-hartford.png"],
    ["The Heart of David", "/PP-heart-of-david.png"],
    ["LZMFG", "/PP-lzmfg.png"],
    ["Lonnie Walker", "/PP-lonnie-walker.png"],
  ].map((item, index) => (
    <BoxService
      title={
        <p>
          <b>{item[0]}</b>
        </p>
      }
      image={item[1]}
    />
  ));

  return (
    <div className={styles.container}>
      <Image
        src={BLC}
        alt={"bottom curve"}
        className={styles.imageBackground}
      />
      <h3
        className={styles.header}
        style={{ color: theme.black, fontSize: theme.fontSizeL }}
      >
        Some of our partners
      </h3>
      <HorizontalScroll items={items} />
      <div style={{ marginBottom: "30px" }} />

      <ButtonText
        buttonTitle={"Explore our Partners"}
        buttonPath={"/partners"}
      />
    </div>
  );
}

export default HomeOurPartners;
