import "./Extras.css";
import React from "react";

function Extras() {
  return (
    <div>
      <div className="Extras">
        <h2>Extras</h2>
      </div>

      <div className="otherwork">
        <h2>Other Work</h2>
      </div>

      <div className="work1">
        <img href="/Users/LM/my-app/public/Screenshot 2024-05-02 at 11.13.46 AM.png"></img>
        <h2>Kanye West Website</h2>
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
      </div>

      <div className="otherimages">
        <h2>Other Images</h2>
      </div>
      <div className="image1">
        <img href="/Users/LM/my-app/public/Customer Journey Map Brainstorm Whiteboard in Blue Pink Green Grey Spaced Color Blocks Style.png"></img>
        <h2>User Journey Map</h2>
      </div>

      <div className="image2">
        <h2>Wilson Poster</h2>
        <img href="/Users/LM/my-app/public/Screenshot 2024-07-09 at 1.01.05 PM.png"></img>
      </div>
    </div>
  );
}

export default Extras;
