import React from "react";
import "./education.css";

const education = ()=>{
    return (
        <section id = "education">
            <hr/>
            <div className = "education"> My Education </div>
            <div className="bachelor">
                <div className = "university">
                    <h3>
                    University: University of Louisiana at Monroe (Monroe, Louisiana)
                    </h3>
                    <span className = "info1">Faculty: College of Science
                    <br/>
                    Major: Computer Science (Honors Program)
                    <br/>
                    GPA: 4.0/4.0
                    </span>
                </div>
                <div className = "college">
               <h3>
                    High School: Oxford College of Engineering and Management
                </h3>
                    Faculty: Computer Science
                    <br/>
                    GPA: 3.82/4.0
               </div>
               <div className = "certification">
                    <h1>My Certificates </h1>
                        <a href = "https://coursera.org/share/323c8ff26d0642cd743c457819b6b1df" target = "#"> Introduction to Front End Development(Meta)</a><br/>
                        <a href = "https://www.linkedin.com/learning/certificates/8e58b8f71399449fe74425b02b09c051f6dd289bd7b3f665c5981a27702e649a?u=93557497" target = "#"> HTML Course (Linkedin)</a><br/>
                        <a href = "https://coursera.org/share/7f9c3fde1815eade3499c8661c3a62b5" target = "#"> Foundation to UX Design (Google)</a><br/>
                        <a href = "https://drive.google.com/file/d/1zQUz5QIbdx9iVuUrtVLfSJDCe0-O4de-/view?usp=drive_link" target = "#"> JavaScript Complete Course (CodeAcademy)</a>
                    
                 </div>
            </div>
        </section>
    )
}
export default education;