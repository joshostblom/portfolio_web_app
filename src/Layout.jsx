import { Outlet } from "react-router-dom";
import LocalNavbar from "./components/LocalNavbar";

function Layout(props) {
  return (
    <div className="p-5">
      <LocalNavbar darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
      <Outlet />
    </div>
  );
}

export default Layout;
