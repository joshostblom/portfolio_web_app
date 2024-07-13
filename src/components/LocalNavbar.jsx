import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-scroll";

function LocalNavbar(props) {
  return (
    <div className="flex shadow-sm bg-white dark:bg-slate-800 p-3 rounded-lg items-center px-5 select-none">
      <h1 className="font-bold text-nowrap">Joshua Ostblom</h1>
      <nav className="flex w-full">
        <ul className="flex items-center ml-2">
          {props.links.map((link) => (
            <li key={link.name}>
              <Link
                className="px-2"
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
        <ul className="flex items-center ml-auto">
          <li>
            {props.darkMode ? (
              <BsSunFill
                onClick={() => {
                  props.setDarkMode(false);
                }}
                className="cursor-pointer text-xl"
              />
            ) : (
              <BsFillMoonStarsFill
                onClick={() => {
                  props.setDarkMode(true);
                }}
                className="cursor-pointer text-xl"
              />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LocalNavbar;
