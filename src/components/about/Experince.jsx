import React from "react";
import expGreen from "../../assets/expGreen.svg";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";


function Experience() {

    const experienceData = [
      {
        id: 1,
        company: "JellyBean.",
        jobtitle: "Software Development Engineer",
        startYear: "june 2023 ",
        endYear: " present",

      },
      {
        id: 2,
        company: "SkyGoal® Inc.",
        jobtitle: "Full Stack Developer Intern",
        startYear: "Apr 2023 ",
        endYear: " June 2023"
      },
      {
        id: 3,
        company: "NEONFLAKE ENTERPRISES (OPC) PVT LTD",
        jobtitle: "SDE Intern",
        startYear: "Feb 2022 ",
        endYear: " July 2022"
      },
      {
        id: 4,
        company: "NPSEI",
        jobtitle: "Frontend Developer Intern",
        startYear: "Aug 2021 ",
        endYear: " Nov 2021"
      },
    ];

  return (
    <div className="experience" id="experience">
      <div className="experience-body">
        <div className="experience-image">
          <img src={expGreen} alt="expGreen" />
        </div>
        <div className="experience-description">
          <h1 className="experience-title">
            <span style={{ color: "#32CD30" }}>Work</span> Experience
          </h1>
          {experienceData.map((exp) => (
            <a
              href={exp.links}
              key={exp.id}
              className="experience-tag"
              
            >
              <ExperienceCard
                key={exp.id}
                id={exp.id}
                jobtitle={exp.jobtitle}
                company={exp.company}
                startYear={exp.startYear}
                endYear={exp.endYear}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
