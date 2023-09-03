import React from "react";
import Typewriter from "typewriter-effect";

const TypeAnimation = () => {
  return (
    <div style={{ height: "100%" }}>
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Full Stack Developer",
            "DSA Enthusiast",
            "React Developer",
            "Frontend Developer",
            "Backend Developer",
            "Android Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 60,
        }}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default TypeAnimation;
