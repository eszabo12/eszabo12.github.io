import React from "react";
import Typewriter from "typewriter-effect";
import styles from "../../style.css"
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        fontSize: 50,
      }}
    />
  );
}

export default Type;