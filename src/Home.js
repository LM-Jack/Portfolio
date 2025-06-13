import { Container } from "react-bootstrap";
import "./Home.css";
import React from "react";

function Home() {
  return (
    <div>
      <div className="Portfolio">
        <h2>Portfolio</h2>
      </div>

      <div className="bio">
        <h2>Bio</h2>
        <p>
          Hi I'm Jack Kyffin, an up-and-coming web developer. This is my
          portfolio website showcasing projects and content I've created during
          my studies at LearnerMe Academy. These pieces reflect my skills,
          creativity, and personal favorites.
        </p>
      </div>

      <div className="projectshome">
        <h2>Projects</h2>
      </div>

      <div className="project1">
        <img src="/assets/TCC/TCC1.png" alt="The Community Corner" />
        <h2>The Community Corner</h2>
      </div>

      <div className="project2">
        <img src="/assets/CC/CoduxComponents2.png" alt="Codux Components" />
        <h2>Codux Components</h2>
      </div>

      <div className="project3">
        <img src="/assets/Squado/SquadoPrototype-1.png" alt="Squado" />
        <h2>Squado</h2>
      </div>
    </div>
  );
}

export default Home;
