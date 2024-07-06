import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";

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
    },
    {
      path: "/admin",
      element: (
        <AuthProvider>
          <AdminLogin />
        </AuthProvider>
      ),
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
