"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import styles from "./contact-form.module.css";
import theme from "@/app/theme";
import SmallTextInput from "@/components/input-text-small/SmallTextInput";
import LargeTextInput from "@/components/input-text-large/LargeTextInput";
import PlanDropdown from "@/components/input-dropdown/PlanDropdown";
import BLB from "../../../public/CUP-header-bubble.png";
import Image from "next/image";

function ContactForm() {
  const [firstNameValue, setFirstnameValue] = useState(["", true]);
  const [lastNameValue, setLastNameValue] = useState(["", true]);
  const [emailValue, setEmailValue] = useState(["", true]);
  const [instagramHandleValue, setInstagramHandleValue] = useState(["", true]);
  const [youtubeHandleValue, setYoutubeHandleValue] = useState(["", true]);
  const [anythingElseValue, setAnythingElseValue] = useState(["", true]);
  const [hearAbout, setHearAbout] = useState("Select and option");

  const [isHovered, setIsHovered] = useState(false);

  const hearAboutValues = [
    ["Customer Referral", ""],
    ["Instagram", ""],
    ["LinkedIn", ""],
    ["Facebook", ""],
  ];

  const buttonstyles = {
    backgroundColor: isHovered ? theme.primaryColor : theme.black,
    color: isHovered ? theme.black : theme.white,
    transition: "background-color 0.3s, color 0.3s",
  };

  const isValidEmail = (email) => {
    // Simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;

    // Check first name
    if (!firstNameValue[0].trim()) {
      setFirstnameValue([firstNameValue[0], false]);
      isValid = false;
    }

    // Check last name
    if (!lastNameValue[0].trim()) {
      setLastNameValue([lastNameValue[0], false]);
      isValid = false;
    }

    // Check email (both for emptiness and valid format)
    if (!emailValue[0].trim() || !isValidEmail(emailValue[0])) {
      setEmailValue([emailValue[0], false]);
      isValid = false;
    }

    // Check company name
    if (!youtubeHandleValue[0].trim()) {
      setYoutubeHandleValue([youtubeHandleValue[0], false]);
      isValid = false;
    }

    if (!instagramHandleValue[0].trim()) {
      setInstagramHandleValue([instagramHandleValue[0], false]);
      isValid = false;
    }

    // If everything is valid, continue with submission
    if (isValid) {
      const formData = {
        firstName: firstNameValue[0],
        lastName: lastNameValue[0],
        email: emailValue[0],
        instagramHandle: instagramHandleValue[0],
        youtubeHandle: youtubeHandleValue[0],
        hearAbout: hearAbout,
        anythingElse: anythingElseValue[0],
      };

      try {
        await axios.post(
          "https://us-central1-premier-ikon.cloudfunctions.net/contact-form-automation",
          formData
        );

        setFirstnameValue(["reset", true]);
        setLastNameValue(["reset", true]);
        setEmailValue(["reset", true]);
        setInstagramHandleValue(["reset", true]);
        setYoutubeHandleValue(["reset", true]);
        setHearAbout("reset");
        setAnythingElseValue(["reset", true]);

      } catch (error) {
        console.error("Error calling Cloud Function:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      {/*{isSubmitting || isSubmitted ? (*/}
      {/*  <FormSubmission*/}
      {/*    submitted={isSubmitted}*/}
      {/*    successState={successState}*/}
      {/*    clearState={clearSubmissionState}*/}
      {/*  />*/}
      {/*) : (*/}
      {/*  ""*/}
      {/*)}*/}
      <Image
        src={BLB}
        alt={"bottom curve"}
        className={styles.imageBackground}
      />

      <div className={styles.leftContainer}>
        <h1 style={{ fontSize: theme.fontSizeL }} className={styles.title}>
          Ready to kickoff a partnership?
        </h1>
        <h3
          style={{ color: theme.black, fontSize: theme.fontSizeDescription }}
          className={styles.subtitle}
        >
          We are always looking for new partnerships. if you’re interested in
          building something amazing, drop us a line.
        </h3>
        <div
          className={styles.divider}
          style={{ borderColor: theme.primaryColor }}
        />
        <div className={styles.lowerDataContainer}>
          <p className={styles.callText}>
            <a
              href="mailto:info@premierikon.com?subject=ONLINE CUSTOMER INQUIRY&body=Hello, I would like to inquire about..."
              style={{ color: theme.black, textDecoration: "underline" }}
            >
              info@premierikon.com
            </a>
          </p>
          <p className={styles.callText}>
            <a href="tel:951-696-0008" style={{ color: theme.black }}>
              951-696-0008
            </a>
          </p>
          <p className={styles.callText}>
            <a
              href="https://www.google.com/maps/dir//premier+ikon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80dc83b6b23934d7:0x828e129650e486df?sa=X&ved=2ahUKEwjMmrODyeCEAxWCIUQIHW9lBicQ9Rd6BAg3EAA"
              style={{ color: theme.black }}
              target={"_blank"}
            >
              Wildomar, CA.
            </a>
          </p>
        </div>
      </div>
      <div className={styles.rightContainerWeb}>
        <form onSubmit={handleSubmit}>
          <div className={styles.topContainer}>
            <SmallTextInput
              title={"First name *"}
              placeholder={"John"}
              type={"text"}
              value={firstNameValue[0]}
              onChange={(e) => setFirstnameValue([e.target.value, true])}
              isValid={firstNameValue[1]}
            />
            <SmallTextInput
              title={"Last name *"}
              placeholder={"Smith"}
              type={"text"}
              value={lastNameValue[0]}
              onChange={(e) => setLastNameValue([e.target.value, true])}
              isValid={lastNameValue[1]}
            />
          </div>
          <div className={styles.bottomContainer}>
            <LargeTextInput
              title={"Email *"}
              placeholder={"johnsmith@gmail.com"}
              type={"email"}
              value={emailValue[0]}
              onChange={(e) => setEmailValue([e.target.value, true])}
              isValid={emailValue[1]}
            />
            <LargeTextInput
              title={"Instagram Handle *"}
              placeholder={"J_Merchant"}
              type={"tel"}
              value={instagramHandleValue[0]}
              onChange={(e) => setInstagramHandleValue([e.target.value, true])}
              isValid={instagramHandleValue[1]}
            />
            <LargeTextInput
              title={"Youtube Handle *"}
              placeholder={"J's Merchant"}
              value={youtubeHandleValue[0]}
              onChange={(e) => setYoutubeHandleValue([e.target.value, true])}
              isValid={youtubeHandleValue[1]}
            />
            <PlanDropdown
              value={hearAbout}
              title={"How did you find out about us?"}
              onChange={(plan) => setHearAbout(plan)}
              items={hearAboutValues}
            />
            <LargeTextInput
              title={"Anything else?"}
              placeholder={"Looking forward to kickoff my new brand!"}
              value={anythingElseValue[0]}
              onChange={(e) => setAnythingElseValue([e.target.value, true])}
              isValid={anythingElseValue[1]}
            />
          </div>
          <div>
            <p style={{ color: theme.darkGrey }} className={styles.warningText}>
              Fields marked with asterisk ( * ) are required.
            </p>
            <button
              style={buttonstyles}
              className={styles.buttonDark}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className={styles.rightContainerMobile}>
        <form onSubmit={handleSubmit}>
          <LargeTextInput
            title={"First name *"}
            placeholder={"John"}
            type={"text"}
            value={firstNameValue[0]}
            onChange={(e) => setFirstnameValue([e.target.value, true])}
            isValid={firstNameValue[1]}
          />
          <LargeTextInput
            title={"Last name *"}
            placeholder={"Smith"}
            type={"text"}
            value={lastNameValue[0]}
            onChange={(e) => setLastNameValue([e.target.value, true])}
            isValid={lastNameValue[1]}
          />
          <LargeTextInput
            title={"Email *"}
            placeholder={"johnsmith@gmail.com"}
            type={"email"}
            value={emailValue[0]}
            onChange={(e) => setEmailValue([e.target.value, true])}
            isValid={emailValue[1]}
          />
          <LargeTextInput
            title={"Phone Number *"}
            placeholder={"951-987-0981"}
            type={"tel"}
            value={instagramHandleValue[0]}
            onChange={(e) => setInstagramHandleValue([e.target.value, true])}
            isValid={instagramHandleValue[1]}
          />
          <div className={styles.bottomContainer}>
            <LargeTextInput
              title={"Company name *"}
              placeholder={"J's Extermination"}
              value={youtubeHandleValue[0]}
              onChange={(e) => setYoutubeHandleValue([e.target.value, true])}
              isValid={youtubeHandleValue[1]}
            />
            <PlanDropdown
              value={hearAbout}
              title={"Solution Package"}
              onChange={(plan) => setHearAbout(plan)}
              items={hearAboutValues}
            />
            {/*<PlanDropdown*/}
            {/*  value={carteValue}*/}
            {/*  title={"A La Carte Solution"}*/}
            {/*  onChange={(plan) => setCarteValue(plan)}*/}
            {/*  items={carteValues}*/}
            {/*/>*/}
            <LargeTextInput
              title={"Anything else?"}
              placeholder={"I need a nice website."}
              value={anythingElseValue[0]}
              onChange={(e) => setAnythingElseValue([e.target.value, true])}
              isValid={anythingElseValue[1]}
            />
          </div>
          <div>
            <p style={{ color: theme.darkGrey }} className={styles.warningText}>
              Fields marked with asterisk ( * ) are required.
            </p>
            <button
              // styles={{ backgroundColor: theme.black, color: theme.white }}
              style={buttonstyles}
              className={styles.buttonDark}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
