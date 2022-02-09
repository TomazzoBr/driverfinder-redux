import { useState } from "react";
import Register from "./Register/Register";
import Login from "./Login/Login";

export default function AuthLogin() {
  const [register, setRegister] = useState(false);

  return (
    <div className="h-screen">
      <div
        className="min-h-full flex items-center justify-center gap-24 py-12 px-4 sm:px-6 lg:px-8
                bg-hero bg-center bg-no-repeat bg-cover shadow-darken"
      >
        <div className="text-4xl text-light text-center">
          <p className="pb-10 text-5xl font-bold">
            The plataform to connect drivers and jobs
          </p>
          <p className="pb-5">Find drivers available for local deliveries</p>
        </div>
        <div>
          {register ? (
            <Register setRegister={setRegister} />
          ) : (
            <Login setRegister={setRegister} />
          )}
        </div>
      </div>
    </div>
  );
}
