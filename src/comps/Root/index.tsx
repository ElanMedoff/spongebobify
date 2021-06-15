import React, { useState } from "react";
import styles from "./Root.module.css";
import { spongebobify, isModifier } from "../../utils/helpers";

export default function Root() {
  const [input, setInput] = useState("");

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
  console.log(handleKeydown);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log(e.target.value.slice(-1));
    console.log(e.target.value.slice(-2));
    const currLetter = e.target.value.slice(-1);

    // if (isModifier(e)) return;

    setInput((prevInput) => {
      return prevInput + spongebobify(prevInput.slice(-2), currLetter);
    });
  };

  const handleClick = () => {
    const input = document.getElementById("input") as HTMLInputElement;
    input.select();
    document.execCommand("copy");
  };

  return (
    <div className={styles.wrapper}>
      <input
        id="input"
        type="text"
        value={input}
        // onKeyDown={handleKeydown}
        // bit of a hack to get rid of some warnings
        onChange={handleChange}
      />
      <button onClick={handleClick}>c</button>
    </div>
  );
}
