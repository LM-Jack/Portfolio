import { Container } from 'react-bootstrap';
import './Home.css';
import React from 'react';


function Home() {
  return <div> 
    
    <div className="Portfolio">
    <h2>Portfolio</h2>
    </div>
    
  <div className="bio">
    <h2>Bio</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    </div>
    <div className="projectshome"> 
    <h2>Projects</h2>

  </div>

  <div className="project1">
    <img href='/Users/LM/my-app/public/Desktop Home Page.png'></img>
    <h2>The Community Corner</h2>
    </div>

    <div className="project2">
    <h2>Codux Components</h2>
    <img href='/Users/LM/my-app/public/Screenshot 2024-07-09 at 1.01.05 PM.png'></img>
    </div>

    <div className="project3">
    <img href='/Users/LM/my-app/public/SquadoPrototype-1.png'></img>
    <h2>Squado</h2>
    </div>
</div>

}

export default Home;