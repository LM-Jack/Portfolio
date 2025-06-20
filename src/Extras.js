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
        <img src="./assets/Ye1.png" alt="Kanye West Website" />
        <h2>Kanye West Website</h2>
      </div>
      <div className="information">
        <div className="bio">
          <h2>Bio</h2>
          <p>
To practice our skills in prototyping and developing a website, we were tasked to prototype and develop a website based on a certain topic.
The website I created was an information website about Kanye West and included a burger menu that navigated to different pages.
Unfortunately, this website was never fully developed.

          </p>
        </div>
        <div className="lists">
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>HTML & CSS</li>
              <li>Prototyping</li>
            </ul>
          </div>
          <div className="software">
            <h3>Software</h3>
            <ul>
              <li>Figma</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="otherimages">
        <h2>Other Images</h2>
      </div>
      <div className="image1">
        <img src="./assets/Customer Journey Map.png" alt="Customer Journey Map" />
        <h2>User Journey Map</h2>
      </div>

      <div className="image2">
        <h2>Wilson Poster</h2>
        <img src="./assets/Wilson Poster.png" alt="Wilson Poster" />
      </div>
    </div>
  );
}

export default Extras;
