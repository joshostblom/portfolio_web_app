import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socialData = [
  {
    title: "Email",
    icon: HiOutlineMail,
    link: "mailto:josh.ostblom@gmail.com?subject=Hello%20Joshua&body=I%20found%20your%20portfolio%20and%20wanted%20to%20reach%20out!",
  },
  {
    title: "Github",
    icon: FaGithub,
    link: "https://github.com/joshostblom",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/joshuaostblom/",
  },
  {
    title: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/josh_likes_space/",
  },
  {
    title: "YouTube",
    icon: FaYoutube,
    link: "https://www.youtube.com/@joshuaostblom9983",
  },
];

export default socialData;
