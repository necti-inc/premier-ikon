import theme from "@/app/theme";
import React from "react";
import style from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

import FooterLogo from "../../../public/header-logo.png";

const Footer = () => {
  return (
    <div
      className={style.footerContainer}
      style={{ backgroundColor: theme.black }}
    >
      <div className={style.leftContainer}>
        <div className={style.bodyContainer}>
          <div className={style.contentContainer}>
            <div className={style.titleContainer}>
              <h3 style={{ color: theme.lightTan }} className={style.subTitle}>
                Contact
              </h3>
              <div
                className={style.textContainer}
                style={{ width: "350px", borderColor: theme.primaryColor }}
              />
              <a
                style={{
                  color: theme.lightTan,
                  textDecoration: "underline",
                }}
                className={style.description}
                href="mailto:info@premierikon.com?subject=ONLINE CUSTOMER INQUIRY&body=Hello, I would like to inquire about..."
              >
                info@premierikon.com
              </a>
              <a
                href="https://www.google.com/maps/dir//premier+ikon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80dc83b6b23934d7:0x828e129650e486df?sa=X&ved=2ahUKEwjMmrODyeCEAxWCIUQIHW9lBicQ9Rd6BAg3EAA"
                style={{ color: theme.lightTan }}
                target={"_blank"}
                className={style.description}
              >
                Wildomar, CA.
              </a>
            </div>
            <div className={style.titleContainer}>
              <h3 style={{ color: theme.lightTan }} className={style.subTitle}>
                Connect
              </h3>
              <div
                className={style.textContainer}
                style={{ width: "200px", borderColor: theme.primaryColor }}
              />
              <div className={style.iconButtonContainer}>
                <a
                  href={"https://www.instagram.com/premierikon/"}
                  target={"_blank"}
                  className={style.iconButton}
                >
                  <FontAwesomeIcon
                    style={{
                      color: theme.lightTan,
                      width: "26px",
                      height: "auto",
                    }}
                    icon={faInstagram}
                  />
                </a>
                <a
                  href={"https://www.facebook.com/premierikoninc"}
                  target={"_blank"}
                  className={style.iconButton}
                >
                  <FontAwesomeIcon
                    style={{
                      color: theme.lightTan,
                      width: "16px",
                      height: "auto",
                    }}
                    icon={faFacebookF}
                  />
                </a>
                <a
                  href={
                    "https://www.linkedin.com/company/premierikon/about/?viewAsMember=true"
                  }
                  target={"_blank"}
                  className={style.iconButton}
                >
                  <FontAwesomeIcon
                    style={{
                      color: theme.lightTan,
                      width: "26px",
                      height: "auto",
                    }}
                    icon={faLinkedinIn}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.lowerContainer}>
          <p style={{ color: theme.lightTan }} className={style.copyRightText}>
            Powered by{" "}
            <a
              className={style.textButton}
              href={"https://www.necti.io"}
              target={"_blank"}
            >
              Necti
            </a>
          </p>
          <p style={{ color: theme.lightTan }} className={style.copyRightText}>
            ©Premier Ikon Inc. All Rights Reserved
          </p>
        </div>
      </div>
      <div className={style.rightContainer}>
        <Image className={style.title} src={FooterLogo} alt={"Footer Logo"} />
      </div>
    </div>
  );
};

export default Footer;
