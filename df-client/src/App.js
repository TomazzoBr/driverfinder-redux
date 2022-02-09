import React, { useEffect } from "react";

import AuthLogin from "./components/Auth/AuthLogin";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const isLoggedIn = true;

  return (
    <div className="h-screen w-full justify-center content-center bg-greenPrinc">
      {isLoggedIn ? <AuthLogin /> : <Dashboard />}
    </div>
  );
}

export default App;
