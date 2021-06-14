import React, { useState } from "react";
import styles from "./Root.module.css";
import { spongebobify, isModifier } from "../../utils/helpers";

export default function Root() {
  const [input, setInput] = useState("");

  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      setInput((prevInput) => {
        // kill last character
        return prevInput.slice(0, -1);
      });
      return;
    }

    if (isModifier(e)) return;

    setInput((prevInput) => {
      return prevInput + spongebobify(prevInput.slice(-1), e.key);
    });
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={input}
        onKeyDown={handleChange}
        // bit of a hack to get rid of some warnings
        onChange={() => {}}
      />
    </div>
  );
}
