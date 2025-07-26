import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";

function LocalNavbar(props) {
  return (
    <div className="flex shadow-md bg-slate-100 dark:bg-slate-800 p-3 rounded-lg items-center px-5 select-none lg:text-xl">
      <nav className="flex w-full">
        {/* Hamburger menu for smaller screens */}
        <div className="hidden max-sm:flex items-center">
          <FiMenu
            className="text-2xl cursor-pointer"
            onClick={() => {
              props.setSideMenuOpen(!props.sideMenuOpen);
            }}
          />
        </div>
        {/* Items listed accross for larger screens */}
        <ul className="max-sm:hidden flex items-center font-bold ml-2 gap-4 ">
          {props.links.map((link, index) => (
            <li key={index}>
              <Link
                className="cursor-pointer hover:text-gray-500 transition-colors duration-200"
                to={link.name.toLowerCase()}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
              >
                {link.displayName}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center ml-auto gap-4">
          {/* Resume button */}
          <a
            href="api/resources/get/resume"
            target="_blank"
            className="inline-block px-5 py-1 text-white font-bold rounded-full bg-gradient-to-r from-pink-400 via-blue-400 to-pink-400 bg-[length:400%_100%] bg-[position:0%_center] hover:animate-glimmer"
          >
            Resume
          </a>
          {/* Social links */}
          {props.socials.map((social, index) => (
            <li
              key={index}
              className="hover:text-gray-500 transition-colors duration-200"
            >
              <a href={social.link} target="_blank">
                <social.icon className="text-2xl lg:text-3xl" />
              </a>
            </li>
          ))}
          {/* Light/Dark mode */}
          <div className="cursor-pointer text-2xl lg:text-3xl hover:text-gray-500 transition-colors duration-200">
            {props.darkMode ? (
              <BsSunFill
                onClick={() => {
                  props.setDarkMode(false);
                }}
              />
            ) : (
              <BsFillMoonStarsFill
                onClick={() => {
                  props.setDarkMode(true);
                }}
              />
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default LocalNavbar;
