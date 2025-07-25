import LocalNavbar from "./components/LocalNavbar";
import About from "./components/About";
import Projects from "./components/Projects";
import { Element } from "react-scroll";
import Skills from "./components/Skills";
import skillTiers from "./data/skillData";
import socialData from "./data/socialData";
import { motion, AnimatePresence } from "framer-motion";
import Experience from "./components/Experience";
import { useState } from "react";
import SideMenu from "./components/SideMenu";
import Education from "./components/Education";
import TitleCard from "./components/TitleCard";

function Layout(props) {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const menuItems = [
    { name: "about", displayName: "About", offset: -100 },
    { name: "skills", displayName: "Skills", offset: -75 },
    { name: "education", displayName: "Education", offset: -100 },
    { name: "experience", displayName: "Experience", offset: -75 },
    { name: "projects", displayName: "Projects", offset: -50 },
  ];

  return (
    <div>
      <div className="z-50 absolute">
        <AnimatePresence>
          {sideMenuOpen && (
            <motion.div
              key="sideMenu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 z-50 shadow-lg"
            >
              <SideMenu setSideMenuOpen={setSideMenuOpen} links={menuItems} />
            </motion.div>
          )}
        </AnimatePresence>
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

      <div className="flex flex-col justify-center pt-16 justify-center items-center">
        <TitleCard />
        <div className="p-5 max-w-6xl">
          <Element name="about">
            <About />
          </Element>
          <Element name="skills">
            <Skills tiers={skillTiers} />
          </Element>
          <Element name="education">
            <Education />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
        </div>
      </div>
    </div>
  );
}

export default Layout;
