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
      <div className="project1">
        <img src="/assets/TCC/TCC1.png" alt="The Community Corner" />
        <h2>The Community Corner</h2>
      </div>
      <div className="information">
        <div className="bio">
          <h2>Bio</h2>
          <p>
The Community Corner was a project that required an event website to be created for a local event hub "The Community Corner".
The goal was to provide a centralised platform for event organisers to list their events and reach a wider audience.
The first of 3 pages is a home page that acts as a landing page and welcomes visitors and where they can view Popular Promotions along with Future Events.
The second page was the Community Promotions Page where users could see Community Initiatives as well as Public Events.
The final page was a contact page that provides a form for users to enquire about listed events or enquire about posting an event on the website.
          </p>
        </div>
        <div className="lists">
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Javascript</li>
              <li>Wireframing & Prototyping</li>
            </ul>
          </div>
          <div className="software">
            <h3>Software</h3>
            <ul>
              <li>Figma</li>
              <li>Visual Studio Code</li>
              <li>Canva</li>
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
        <img src="/assets/CC/CoduxComponents1.png" alt="Codux Components" />
      </div>
      <div className="information">
        <div className="bio">
          <h2>Bio</h2>
          <p>
I was tasked to create components for a mobile app using the software "Codux".
This project was part of a bigger project of creating a soil tracking mobile app for farmers.
These components were made using the software "Codux", which was a new development platform that allowed you to design and develop React projects.
My role in the development of the soil tracking app, which was named Live Soil Tracking "LST", was to reference the prototype designs of the app on Figma and break each page down and individually develop all the required pieces of the UI.
          </p>
        </div>
        <div className="lists">
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Referencing Prototypes</li>
              <li>Communication</li>
            </ul>
          </div>
          <div className="software">
            <h3>Software</h3>
            <ul>
              <li>Codux</li>
              <li>Figma</li>
              <li>Github</li>
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
        <img src="/assets/Squado/SquadoPrototype-1.png" alt="Squado" />
        <h2>Squado</h2>
      </div>
      <div className="information">
        <div className="bio">
          <h2>Bio</h2>
          <p>

Squado was a squad/team management React-based website where users can create a list and add people to it along with editing their roles/positions.
Along with other management functions for the list to filter/sort items.
The purpose of the website is to make a management system that allows the users to add and manage people and provide management functions to manage the entire list as a whole.
This was the first time I had developed a website with React.js & Bootstrap, so it required me to learn both whilst making the website.
          </p>
        </div>
        <div className="lists">
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>Bootstrap</li>
              <li>React.js</li>
              <li>Wireframing & Prototyping</li>
            </ul>
          </div>
          <div className="software">
            <h3>Software</h3>
            <ul>
              <li>Figma</li>
              <li>Visual Studio Code</li>
              <li>Canva</li>
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
