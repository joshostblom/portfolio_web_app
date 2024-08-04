import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-scroll";

function LocalNavbar(props) {
  return (
    <div className="flex shadow-sm bg-white dark:bg-slate-800 p-3 rounded-lg items-center px-5 select-none lg:text-xl">
      <nav className="flex w-full">
        <ul className="flex items-center ml-2 gap-4">
          {props.links.map((link, index) => (
            <li key={index}>
              <Link
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
          {props.socials.map((social, index) => (
            <li key={index}>
              <a href={social.link} target="_blank">
                <social.icon className="text-2xl lg:text-3xl" />
              </a>
            </li>
          ))}
          <div>
            {props.darkMode ? (
              <BsSunFill
                onClick={() => {
                  props.setDarkMode(false);
                }}
                className="cursor-pointer text-2xl lg:text-3xl"
              />
            ) : (
              <BsFillMoonStarsFill
                onClick={() => {
                  props.setDarkMode(true);
                }}
                className="cursor-pointer text-2xl lg:text-3xl"
              />
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default LocalNavbar;
