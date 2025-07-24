import {
  FaAndroid,
  FaCss3Alt,
  FaPython,
  FaReact,
  FaUnity,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiCplusplus,
  SiDotnet,
  SiExpress,
  SiJetpackcompose,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiLinux,
  SiIntellijidea,
  SiBlender,
} from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { TbBrandKotlin, TbBrandXamarin, TbFileTypeSql } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";

const skillTiers = [
  {
    name: "Programming Languages",
    skills: [
      {
        name: "Kotlin",
        color: "#7F52FF",
        icon: TbBrandKotlin,
      },
      {
        name: "Python",
        color: "#3776AB",
        icon: FaPython,
      },
      {
        name: "C#",
        color: "#239120",
        icon: PiFileCSharp,
      },
      {
        name: "JavaScript",
        color: "#F7DF1E",
        icon: SiJavascript,
      },
      {
        name: "TypeScript",
        color: "#3178C6",
        icon: SiTypescript,
      },
      {
        name: "Java",
        color: "#EA2D2E",
        icon: FaJava,
      },
      {
        name: "C++",
        color: "#00599C",
        icon: SiCplusplus,
      },
      {
        name: "SQL",
        color: "#e38c00",
        icon: TbFileTypeSql,
      },
    ],
  },
  {
    name: "Application Development",
    skills: [
      {
        name: "Android",
        color: "#3DDC84",
        icon: FaAndroid,
      },
      {
        name: "Jetpack Compose",
        color: "#4285F4",
        icon: SiJetpackcompose,
      },
      {
        name: "React.js",
        color: "#61DAFB",
        icon: FaReact,
      },
      {
        name: "Tailwind CSS",
        color: "#38B2AC",
        icon: SiTailwindcss,
      },
      {
        name: "ASP.NET",
        color: "#512BD4",
        icon: SiDotnet,
      },
      {
        name: "Xamarin",
        color: "#3498DB",
        icon: TbBrandXamarin,
      },
      {
        name: "Express.js",
        color: "#404040",
        icon: SiExpress,
      },
      {
        name: "CSS",
        color: "#1572B6",
        icon: FaCss3Alt,
      },
      {
        name: "MySQL",
        color: "#4479A1",
        icon: GrMysql,
      },
    ],
  },
  {
    name: "Developer Tools",
    skills: [
      {
        name: "Android Studio",
        color: "#3DDC84",
        icon: FaAndroid,
      },
      {
        name: "Unity",
        color: "#000000",
        icon: FaUnity,
      },
      {
        name: "Git",
        color: "#F05032",
        icon: FaGitAlt,
      },
      {
        name: "Visual Studio",
        color: "#5C2D91",
        icon: DiVisualstudio,
      },
      {
        name: "Linux",
        color: "#FCC624",
        icon: SiLinux,
      },
      {
        name: "IntelliJ",
        color: "#FF6F91",
        icon: SiIntellijidea,
      },
      {
        name: "Blender",
        color: "#F5792A",
        icon: SiBlender,
      },
    ],
  },
];

export default skillTiers;
