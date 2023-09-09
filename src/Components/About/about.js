import React from "react";
import "./about.css"
import pic from "../../assets/abhi.png";
import facebook from "../../assets/facebook-icon.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"
import github from "../../assets/github.gif"


const years = "four";
const about = () =>{
return(
    <section id = "about">
        <div className = "about">
            About Me
        </div>
        <div className="photo">
            <img className = "photo" src = {pic} alt = "Abhishek"/> 
        </div>
        <div className = "description">
            <p>To Introduce myself, I am a Computer Science student passionate about Software Development and UX/UI Design with more than { years } years of experience in the field of both front end and back end technologies.
            Upto this stage, My learning has led me to various projects, from building responsive user interface in the front end to creating server-side web architectures stably and efficiently in the backend.
            I am a quick learner and am always seeking new challenges and opportunities to expand my knowledge and skills. 
            I am a highly capable leader, having led many real world projects.</p>
        </div>
        <div className="social-logos">
            <a href = "https://www.facebook.com/abhishek.amgain" alt = "facebook" target = "_"><img alt = "social-logo" src = {facebook}/></a>
            <a href = "https://www.instagram.com/abhishekamgain/" alt = "instagram" target = "_"> <img alt = "social-logo" src = {instagram}/></a>
            <img alt = "social-logo" src = {twitter}/>
            <a href = "https://github.com/amgaina" alt = "gitHub" target = "_"><img alt = "social-logo" src = {github}/></a>
        </div>
        <div className = "footer">
            <span className="copyright"> &copy;</span> 2023 Abhishek Amgain. All rights reserved. |<br/>
            Contact me | Privacy Policy | Terms of Service |
        </div>
    </section>
)
}
export default about;