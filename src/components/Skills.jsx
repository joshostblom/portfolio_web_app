import { FaAndroid, FaPython, FaReact, FaUnity } from "react-icons/fa";
import { SiJetpackcompose } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";

function Skills() {
  return (
    <div className="flex gap-8 flex-col justify-center">
      <h2 className="text-3xl text-center font-bold w-full">Skills</h2>
      <ul className="flex gap-4">
        <li className="bg-slate-200 dark:bg-slate-800 rounded-xl text-center p-5">
          <FaAndroid className="text-5xl m-5" />
          Android
        </li>
        <li className="bg-slate-200 dark:bg-slate-800 rounded-xl text-center p-5">
          <SiJetpackcompose className="text-5xl m-5" />
          Jetpack
          <br />
          Compose
        </li>
        <li className="bg-slate-200 dark:bg-slate-800 rounded-xl text-center p-5">
          <FaReact className="text-5xl m-5" />
          React
        </li>
        <li className="bg-slate-200 dark:bg-slate-800 rounded-xl text-center p-5">
          <FaUnity className="text-5xl m-5" />
          Unity
        </li>
        <li className="bg-slate-200 dark:bg-slate-800 rounded-xl text-center p-5">
          <TbBrandKotlin className="text-5xl m-5" />
          Kotlin
        </li>
        <li className="bg-slate-200 dark:bg-slate-800 rounded-xl text-center p-5">
          <FaPython className="text-5xl m-5" />
          Python
        </li>
      </ul>
    </div>
  );
}

export default Skills;
