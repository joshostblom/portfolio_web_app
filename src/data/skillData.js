import {
  FaAndroid,
  FaCss3Alt,
  FaPython,
  FaReact,
  FaUnity,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoWoman } from "react-icons/io5";
import {
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiExpress,
  SiJetpackcompose,
  SiXamarin,
} from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";

const skillTiers = [
  {
    name: "Expert",
    color: "#00FF00",
    skills: [
      {
        name: "Android",
        icon: FaAndroid,
      },
      {
        name: "Kotlin",
        icon: TbBrandKotlin,
      },
      {
        name: "Jetpack Compose",
        icon: SiJetpackcompose,
      },
      {
        name: "C#",
        icon: SiCsharp,
      },
      {
        name: "Unity",
        icon: FaUnity,
      },
    ],
  },
  {
    name: "Proficient",
    color: "#FFF700",
    skills: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "ASP.NET",
        icon: SiDotnet,
      },
      {
        name: "Xamarin",
        icon: SiXamarin,
      },
      {
        name: "C++",
        icon: SiCplusplus,
      },
    ],
  },
  {
    name: "Intermediate",
    color: "#FF7F00",
    skills: [
      {
        name: "Python",
        icon: FaPython,
      },
      {
        name: "MySQL",
        icon: GrMysql,
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
      },
    ],
  },
  {
    name: "Beginner",
    color: "#FF0000",
    skills: [
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "Satisfying Women",
        icon: IoWoman,
      },
    ],
  },
];

export default skillTiers;
