import React from 'react';
import './skills.css';
import UI from '../../assets/ui-design.png';
import Web from '../../assets/website-design.png';
import App from '../../assets/app-design.png';

const Skills = ()=>{
    return(
        <section id = "skills">
            <div className = "myskills"> MY SKILLS</div>
            <div className= "skillbars">
                <div className = "skillbar"> <img src = {Web} alt = "language" /><h1>Programming Languages</h1><h3>Programming Skills: Java, Python, HTML, CSS, JavaScript, AppScript</h3></div>
                <div className = "skillbar"><img src = {UI} alt = "libraries"/><h1>Libraries and FrameWorks</h1><h3>Libraries and FrameWorks: Scrum, React, BootStrap, Angular</h3></div>
                <div className = "skillbar"><img src = {UI} alt = "version control"/><h1>Version and Collaboration Platform</h1><h3>Version Control and Collaboration: Git, GitHub</h3></div>
                <div className = "skillbar"><img src = {App} alt = "professional_skills"/><h1>Professional Skills</h1><h3>Professional Skills: Algorithms and Data Structures, Object-Oriented Programming,<br/> Figma, Wix, Presentation Skills, LeaderShip Skills </h3></div>
            </div>
        </section>
    )
}
export default Skills;