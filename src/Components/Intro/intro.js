import React from "react";
import './intro.css';
import bg from "../../assets/image.png";

const intro = ()=>{
    return (
        <section id = "intro">
            <div className="IntroContent">
            <div className = "hello">Hello Everyone,</div>
            <div className = "welcome">WELCOME TO MY PORTFOLIO</div>
            <div className = "name"> I'm <span className = "abhi">ABHISHEK AMGAIN</span></div>
            <div className = "position"> Full Stack Developer</div>
            <div className="info"> I am a highly motivated and creative computer science student with a passion for technology and problem-solving. With a solid understanding of programming concepts and a passion for technology, I am eager to apply my skills to real-world projects and gain valuable hands-on experience.</div>
            </div>
            <img src = {bg } alt = "" className = "bg"/>
        </section>
    )
}
export default intro;