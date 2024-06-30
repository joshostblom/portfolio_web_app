import { useState } from "react";

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

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
        <button className="flex items-center shadow-sm bg-slate-200 dark:bg-slate-800 rounded-full px-10 py-1 m-5">
          Log In
        </button>
      </div>
    )
  );
}

export default Admin;
