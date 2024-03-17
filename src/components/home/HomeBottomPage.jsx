import React from "react";
import avatar from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";

const HomeBottomPage = () => {

  return (
    <div className="homeBottom">
      <h1
        style={{ fontSize: "2.6rem", marginBottom: "1rem", marginTop: "-9rem" }}
        className="homeBottom-title"
      >
        Some Things <span style={{ color: "#32CD30" }}>About Me</span>
      </h1>
      <div className="introduction">
        <div className="intro-text">
          <p>
            I am Gaurav Singh, A Computer Science and Engineering Graduate with
            good, <span style={{ color: "#32CD30" }}>problem solving </span>
            skills & passionate about Full-stack development and currently working as a Software Development Engineer. 
          </p>
          <br />
          <p>
            I love working as a{" "}
            <span style={{ color: "#32CD30" }}>Full Stack Developer</span> and
            My tech stack includes React, NodeJs, Express.js, NextJs, MongoDB, TypeScript. I am
            also familar with NoSQL and SQL .
          </p>
          <br />
          <p>
            I am also proficient in JavaScript, C++ and love{" "}
            <span style={{ color: "#32CD30" }}>solving problems</span> involving
            data structures and algorithms.
          </p>
          <br />
          <p>
            I'm also an active participant in various{" "}
            <span style={{ color: "#32CD30" }}>open source programs </span> such
            as{" "}
            <span style={{ color: "#32CD30" }}>
            Hacktoberfest{" "}
            </span>
          </p>
          <br />
          <p>
            I love making side projects and learn about new{" "}
            <span style={{ color: "#32CD30" }}>technologies</span>.
          </p>
          <br />
          <p>
            Checkout my <span style={{ color: "#32CD30" }}>social links</span>{" "}
            for more about me.{" "}
          </p>
        </div>
        <div className="intro-image">
          <Tilt>
            <img
              class="rounded w-36 h-36"
              src={avatar}
              alt="Extra large avatar"
            ></img>
          </Tilt>
        </div>
      </div>
    
    </div>
  );
};

export default HomeBottomPage;
