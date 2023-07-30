import React, { useState } from "react";

const Login = () => {
  const [log, setLog] = useState(true);

  function handleLogin() {
    setLog(true);
  }

  function handleLogout() {
    setLog(false);
  }

  return (
    <div>
      {log ? (
        <button
          onClick={handleLogout}
          className="bg-gray-400 hover:bg-gray-450 text-white font-semibold py-2 px-4 rounded"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-gray-400 hover:bg-gray-450 text-white font-semibold py-2 px-4 rounded"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
