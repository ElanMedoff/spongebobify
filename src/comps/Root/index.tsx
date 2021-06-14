import React, { useState } from "react";
import styles from "./Root.module.css";
import { spongebobify, isModifier } from "../../utils/helpers";

export default function Root() {
  const [input, setInput] = useState("");

  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      setInput((prevInput) => {
        if (prevInput.length === 0) return "";

        const poppedString = prevInput.split("").pop();
        if (typeof poppedString === "string") {
          return poppedString.toString();
        }

        throw new Error("Issue with popping string!");
      });
      return;
    }

    console.log(e.key);
    console.log(isModifier(e));
    // check if key is modifier key
    if (isModifier(e)) return;

    setInput((prevInput) => {
      return prevInput + spongebobify(prevInput.slice(-1), e.key);
    });
  };

  return (
    <div className={styles.wrapper}>
      <input type="text" value={input} onKeyDown={handleChange} />
    </div>
  );
}
