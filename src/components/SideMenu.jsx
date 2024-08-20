import { MdArrowBackIos } from "react-icons/md";
import me from "/images/me.jpg";
import { Link } from "react-scroll";

function SideMenu(props) {
  return (
    <div className="hidden max-sm:flex fixed h-full w-full">
      <aside className="w-60 bg-white dark:bg-slate-800 drop-shadow-2xl">
        <div className="flex flex-row p-5 w-full justify-center">
          <div className="flex flex-col gap-5 w-full items-center">
            <div className="flex flex-row gap-4 items-center">
              <img src={me} className="h-12 w-12 rounded-full"></img>
              <div className="font-bold text-2xl">Joshua Ostblom</div>
              <MdArrowBackIos
                className="text-2xl cursor-pointer"
                onClick={() => {
                  props.setSideMenuOpen(false);
                }}
              />
            </div>
            <ul className="flex flex-col w-full gap-4">
              {props.links.map((link, index) => (
                <li key={index}>
                  <Link
                    className="cursor-pointer"
                    to={link.name.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    duration={500}
                    onClick={() => {
                      props.setSideMenuOpen(false);
                    }}
                  >
                    <div className="text-2xl">{link.displayName}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      <div
        className="flex flex-grow bg-black opacity-30"
        onClick={() => {
          props.setSideMenuOpen(false);
        }}
      ></div>
    </div>
  );
}

export default SideMenu;
