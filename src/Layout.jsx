import LocalNavbar from "./components/LocalNavbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { Element } from "react-scroll";
import Skills from "./components/Skills";
import skillTiers from "./data/skillData";

function Layout(props) {
  return (
    <div>
      <div className="fixed w-full p-5 z-50">
        <LocalNavbar
          darkMode={props.darkMode}
          setDarkMode={props.setDarkMode}
          links={[
            { name: "about", displayName: "About", offset: -100 },
            { name: "resume", displayName: "Resume", offset: -75 },
            { name: "projects", displayName: "Projects", offset: 50 },
          ]}
        />
      </div>
      <div className="p-5 pt-10 w-full">
        <Element name="about">
          <About />
        </Element>
        <Element name="resume">
          <div className="flex flex-col lg:flex-row w-full justify-center gap-10">
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
