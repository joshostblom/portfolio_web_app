import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

function LocalNavbar(props) {
  return (
    <div className="flex bg-slate-200 dark:bg-slate-800 p-3 rounded-lg items-center px-5 select-none">
      <h1 className="font-bold text-nowrap">Joshua Ostblom</h1>
      <nav className="flex w-full">
        <ul className="flex items-center ml-2">
          <li>
            <a className="px-2" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="px-2" href="/resume">
              Resume
            </a>
          </li>
          <li>
            <a className="px-2" href="/projects">
              Projects
            </a>
          </li>
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
