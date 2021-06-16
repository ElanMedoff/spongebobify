import React, { useState } from "react";
import styles from "./Root.module.css";
import { spongebobify } from "../../utils/helpers";

export default function Root() {
  const [input, setInput] = useState("");

  const handleClick = () => {
    const input = document.getElementById("input") as HTMLInputElement;
    input.select();
    document.execCommand("copy");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currLetter = e.target.value.slice(-1);

    // detect delete
    if (input.length > e.target.value.length) {
      setInput(e.target.value);
      return;
    }

    setInput((prevInput) => {
      return prevInput + spongebobify(prevInput.slice(-1), currLetter);
    });
  };

  return (
    <div className={styles.wrapper}>
      <input id="input" type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>c</button>
    </div>
  );
}
