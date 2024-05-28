import React from "react";
import Image from "next/image";
import styles from "./home-header.module.css";
import theme from "@/app/theme";
import ButtonGeneral from "@/components/button-general/ButtonGeneral";
import headerImage from "../../../public/HP-header.jpg";

function HomeHeader() {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage}>
                <Image
                    src={headerImage}
                    alt="Header background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className={styles.overlay}></div>
            <h1
                style={{
                    fontSize: theme.fontSizeLHeader,
                    color: theme.white,
                    position: "relative",
                    zIndex: 2,
                }}
                className={styles.title}
            >
                Crafting distinctive identities, your brand's vision, our creative
                mission.
            </h1>
            <div
                style={{
                    fontSize: theme.fontSizeLHeader,
                    position: "relative",
                    zIndex: 2,
                }}
                className={styles.title}
            >
                <ButtonGeneral
                    title={"BECOME A PARTNER"}
                    boxColor={theme.white}
                    buttonPath={"/contact"}
                    style={{ position: "relative", zIndex: 2 }}
                />
            </div>
        </div>
    );
}

export default HomeHeader;
