import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";

function App() {
  // Control dark mode
  const getDarkModeSettings = () => {
    const savedData = JSON.parse(localStorage.getItem("darkMode"));
    return savedData !== null
      ? savedData
      : window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
  };
  const [darkMode, setDarkMode] = useState(getDarkModeSettings);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout darkMode={darkMode} setDarkMode={setDarkMode} />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "resume",
          element: <Resume />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
