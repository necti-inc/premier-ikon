"use client";

import React from "react";
import styles from "./swiper-clients.module.css";

import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import BoxService from "@/components/box-service/BoxService";
import "./swiper-clients.module.css";
import SwiperNavButtons from "@/components/swiper-clients/SwiperNavButtons";

function SwiperClients() {
  return (
    <div>
      <Swiper
        className={styles.swiperContainer}
        slidesPerView={3}
        breakpoints={{
          // when window width is >= 640px
          1275: {
            width: 1275,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BoxService
            title={
              <p>
                <b>Legends media</b>
              </p>
            }
            image={"/PP-legends.png"}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BoxService
            title={
              <p>
                <b>kkfit</b>
              </p>
            }
            image={"/PP-kkfit.png"}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BoxService
            title={
              <p>
                <b>hartford ltd.</b>
              </p>
            }
            image={"/PP-hartford.png"}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BoxService
            title={
              <p>
                <b>The Heart of David</b>
              </p>
            }
            image={"/PP-heart-of-david.png"}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BoxService
            title={
              <p>
                <b>LZMFG</b>
              </p>
            }
            image={"/PP-lzmfg.png"}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BoxService
            title={
              <p>
                <b>Lonnie Walker</b>
              </p>
            }
            image={"/PP-lonnie-walker.png"}
          />
        </SwiperSlide>
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
}

export default SwiperClients;
