import "./Projects.css";
import React from "react";
import Carousel from './Carousel';
import TCC1 from './assets/TCC/TCC1.png';
import TCC2 from './assets/TCC/TCC2.png';
import TCC3 from './assets/TCC/TCC3.png';
import CC1 from './assets/CC/CoduxComponents1.png';
import CC2 from './assets/CC/CoduxComponents2.png';
import squado1 from './assets/Squado/SquadoPrototype-1.png'

function Projects() {
  return (
    <div>
      <div className="projects">
        <h2>Projects </h2>
      </div>
      ;
      <div className="project1">
        <img src="/Users/LM/my-app/public/Desktop Home Page.png" alt="The Community Corner Home Page" />
        <h2>The Community Corner</h2>
      </div>
      <div className="information">
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="lists">
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>React.js</li>
              <li>Wireframing</li>
            </ul>
          </div>
          <div className="software">
            <h3>Software</h3>
            <ul>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Sketch</li>
            </ul>
          </div>
        </div>
        <Carousel
  images={[TCC1, TCC2, TCC3]}
  imageLinks={[
    'https://example.com/tcc1',
    'https://example.com/tcc2',
    'https://example.com/tcc3'
  ]}
/>
      </div>
      <div className="project2">
        <h2>Codex Components</h2>
        <img href="/Users/LM/my-app/public/CoduxComponents1.png"></img>
      </div>
      <div className="information">
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="lists">
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>React.js</li>
              <li>Wireframing</li>
            </ul>
          </div>
          <div className="software">
            <h3>Software</h3>
            <ul>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Sketch</li>
            </ul>
          </div>
        </div>
        <Carousel
  images={[CC1, CC2]}
  imageLinks={[
    'https://example.com/cc1',
    'https://example.com/cc2'
  ]}
/>
      </div>
      <div className="project3">
        <img href="/Users/LM/my-app/public/SquadoPrototype-1.png"></img>
        <h2>Squado</h2>
      </div>
      <div className="information">
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="lists">
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>React.js</li>
              <li>Wireframing</li>
            </ul>
          </div>
          <div className="software">
            <h3>Software</h3>
            <ul>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Sketch</li>
            </ul>
          </div>
        </div>
        <Carousel
  images={[squado1]}
  imageLinks={[
    'https://example.com/squado1'
  ]}
/>
      </div>
    </div>
  );
}

export default Projects;
