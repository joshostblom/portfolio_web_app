import { FaAndroid, FaPython, FaReact, FaUnity } from "react-icons/fa";
import me from "../assets/me.jpg";
import { TbBrandKotlin } from "react-icons/tb";
import { SiJetpackcompose } from "react-icons/si";

function About() {
  return (
    <div className="m-5">
      <div className="flex justify-center items-center my-10">
        <h1 className="text-4xl text-right font-bold mx-5">
          Hi, I'm <span className="text-blue-600">Josh Ostblom</span>,<br />a
          Software Engineer.
        </h1>
        <img src={me} className="w-56 h-auto rounded-full" />
      </div>

      <div>
        <h2 className="text-3xl font-bold">About</h2>
        <p>
          I grew up in Omaha, Nebraska. There, I attended Ralston High School
          where I was involved in band, robotics, and the honor's society. After
          getting my diploma in 2020, I attended the University of Nebraska
          Omaha where I pursued a bachelor's in computer science. In fall of
          2022, I transferred to the University of Nebraska Lincoln where I am
          continuing my degree. I am expected to graduate in December of 2024,
          and I plan on continuing my education to earn a master's in computer
          science by December of 2025 through an accelerated program.
        </p>
      </div>

      <div className="my-10 flex flex-wrap justify-center">
        <h2 className="text-3xl text-center font-bold w-full">Skills</h2>
        <ul className="flex">
          <li className="bg-slate-200 dark:bg-slate-800 rounded-xl text-center p-5 m-2">
            <FaAndroid className="text-5xl m-5" />
            Android
          </li>
          <li className="bg-slate-200 dark:bg-slate-800 rounded-xl text-center p-5 m-2">
            <SiJetpackcompose className="text-5xl m-5" />
            Jetpack
            <br />
            Compose
          </li>
          <li className="bg-slate-200 dark:bg-slate-800 rounded-xl text-center p-5 m-2">
            <FaReact className="text-5xl m-5" />
            React
          </li>
          <li className="bg-slate-200 dark:bg-slate-800 rounded-xl text-center p-5 m-2">
            <FaUnity className="text-5xl m-5" />
            Unity
          </li>
          <li className="bg-slate-200 dark:bg-slate-800 rounded-xl text-center p-5 m-2">
            <TbBrandKotlin className="text-5xl m-5" />
            Kotlin
          </li>
          <li className="bg-slate-200 dark:bg-slate-800 rounded-xl text-center p-5 m-2">
            <FaPython className="text-5xl m-5" />
            Python
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
