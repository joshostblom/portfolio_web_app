import { MdArrowBackIos } from "react-icons/md";
import me from "/images/me.jpg";
import { Link } from "react-scroll";

function SideMenu(props) {
  return (
    <aside className="hidden max-sm:flex fixed h-full w-60 bg-white dark:bg-slate-800">
      <div className="flex flex-row p-5 w-full justify-center">
        <div className="flex flex-col gap-5 w-full items-center">
          <div className="flex flex-row gap-4 items-center">
            <img src={me} className="h-12 w-12 rounded-full"></img>
            <div className="font-bold text-2xl">Joshua Ostblom</div>
            <MdArrowBackIos
              className="text-2xl"
              onClick={() => {
                props.setMenuOpen(false);
              }}
            />
          </div>
          <ul className="flex flex-col w-full gap-4">
            {props.links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.name.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                >
                  <div className="text-2xl">{link.displayName}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default SideMenu;
