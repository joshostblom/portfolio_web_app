import LocalNavbar from "./components/LocalNavbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { Element } from "react-scroll";
import Skills from "./components/Skills";
import skillTiers from "./data/skillData";
import socialData from "./data/socialData";
import Experience from "./components/Experience";
import { useState } from "react";
import SideMenu from "./components/SideMenu";

function Layout(props) {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const menuItems = [
    { name: "about", displayName: "About", offset: -100 },
    { name: "experience", displayName: "Experience", offset: -75 },
    { name: "skills", displayName: "Skills", offset: -75 },
    { name: "resume", displayName: "Resume", offset: -75 },
    { name: "projects", displayName: "Projects", offset: -50 },
  ];

  return (
    <div>
      <div className="z-50 absolute">
        {sideMenuOpen && (
          <SideMenu setSideMenuOpen={setSideMenuOpen} links={menuItems} />
        )}
        {!sideMenuOpen && (
          <div className="fixed w-full p-5">
            <LocalNavbar
              darkMode={props.darkMode}
              setDarkMode={props.setDarkMode}
              sideMenuOpen={sideMenuOpen}
              setSideMenuOpen={setSideMenuOpen}
              links={menuItems}
              socials={socialData}
            />
          </div>
        )}
      </div>

      <div className="p-5 pt-16 w-full justify-center items-center">
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="skills">
          <Skills tiers={skillTiers} />
        </Element>
        <Element name="resume">
          <Resume />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
      </div>
    </div>
  );
}

export default Layout;
