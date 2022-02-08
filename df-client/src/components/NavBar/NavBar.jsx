import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex flex-col w-full h-full justify-start items-center bg-greenPrinc">
      <div className="flex h-16 w-full mt-10 justify-center items-center bg-greyPrinc">
        <h1>DRIVER FINDER</h1>
      </div>
      <div className="flex h-16 w-full mt-10 justify-around items-center bg-greyPrinc">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/login">
          <p>Login</p>
        </Link>
      </div>
    </div>
  );
}
