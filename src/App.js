import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from "./Components/Skills/skills";
import Education from "./Components/Education/education";
import About from "./Components/About/about"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Education/>
      <About/>

    </div>
  );
}

export default App;
