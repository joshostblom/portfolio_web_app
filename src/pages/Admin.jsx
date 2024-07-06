import { useState } from "react";
import useAuth from "../hooks/useAuth";
import api from "../api/api";

function Admin() {
  const { setAuth } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    setIsLoading(true);
    try {
      const response = await api.post(
        "http://localhost:8080/admin/login",
        JSON.stringify({ user, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response?.data?.loginSuccessful) {
        const accessToken = response?.data?.token;
        setAuth({ user, password, accessToken });
        setIsLoggedIn(true);
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    !isLoggedIn && (
      <div className="flex flex-col p-24 items-center justify-center">
        <h1 className="text-2xl p-3">Admin Login</h1>
        <input
          className="flex items-center bg-transparent p-2 m-1 border-b"
          placeholder="Username"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input
          className="flex items-center bg-transparent p-2 m-1 border-b"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="flex items-center shadow-sm bg-slate-200 dark:bg-slate-800 rounded-full px-10 py-1 m-5"
          onClick={login}
        >
          {isLoading ? "Is Loading" : "Log In"}
        </button>
        {error && <div className="text-red-600">{error}</div>}
      </div>
    )
  );
}

export default Admin;
