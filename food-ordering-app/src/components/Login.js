import React, { useState } from "react";

const Login = () => {
  const [log, setLog] = useState("Logout");

  return (
    <div>
      <button
        onClick={() => {
          log == "Login" ? setLog("Logout") : setLog("Login");
        }}
        className="bg-gray-400 hover:bg-gray-450 text-white font-semibold py-2 px-4 rounded"
      >
        {log}
      </button>
    </div>
  );
};

export default Login;
