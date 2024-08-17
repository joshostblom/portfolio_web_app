import LocalNavbar from "./components/LocalNavbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { Element } from "react-scroll";
import Skills from "./components/Skills";
import skillTiers from "./data/skillData";
import socialData from "./data/socialData";
import Experience from "./components/Experience";

function Layout(props) {
  return (
    <div>
      <div className="fixed w-full p-5 z-50">
        <LocalNavbar
          darkMode={props.darkMode}
          setDarkMode={props.setDarkMode}
          links={[
            { name: "about", displayName: "About", offset: -100 },
            { name: "experience", displayName: "Experience", offset: -50 },
            { name: "resume", displayName: "Resume", offset: -75 },
            { name: "projects", displayName: "Projects", offset: -75 },
          ]}
          socials={socialData}
        />
      </div>
      <div className="p-5 pt-16 w-full">
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="resume">
          <div className="flex flex-wrap w-full justify-center gap-10">
            <Resume />
            <div>
              <Skills tiers={skillTiers} />
            </div>
          </div>
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
      </div>
    </div>
  );
}

export default Layout;
