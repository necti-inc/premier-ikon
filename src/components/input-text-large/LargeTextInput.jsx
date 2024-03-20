"use client";

import React, { useState, useEffect } from "react";
import style from "./largetextinput.module.css";
import theme from "@/app/theme";

function LargeTextInput(props) {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setInputValue(props.value);
    if (props.value === "reset") {
      setInputValue("");
      setIsTyping(false);
    }
  }, [props.value]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };

  return (
    <div className={style.container}>
      <label
        style={{ color: props.isValid ? theme.black : theme.error }}
        className={style.label}
      >
        {props.title}
      </label>
      <input
        style={{
          fontWeight: isTyping ? 600 : 600,
          borderColor: theme.grey,
          fontFamily: "inherit",
        }}
        className={style.input}
        id={props.title}
        type="text"
        placeholder={props.placeholder}
        value={inputValue}
        onChange={(e) => {
          handleInputChange(e);
          props.onChange && props.onChange(e);
        }}
        required={props.required}
      />
    </div>
  );
}

export default LargeTextInput;
