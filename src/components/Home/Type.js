import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Bug Fixer",
          "Stackoverflow Searcher",
          "Server deployer",
          "Researcher",
          ""

          // "Github Cloner",
          // "Roboticist",
          // "Learner",
          
          // "Deep Learning Engineer",
          // "MERN Stack Developer",
          // "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
