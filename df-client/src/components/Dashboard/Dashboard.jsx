// import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import NavBar from "../NavBar/NavBar.jsx";
import Home from "../Home/Home.jsx";
import CompanyHome from "../Company/CompanyHome/CompanyHome.jsx";
import CompanyJobs from "../Company/CompanyJobs/CompanyJobs.jsx";
import DriverHome from "../Driver/DriverHome.jsx";
import Jobs from "../Jobs/Jobs.jsx";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register.jsx";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full h-full justify-start items-center">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:id" element={<CompanyHome />} />
        <Route path="/company/:id/jobs" element={<CompanyJobs />} />
        <Route path="/driver/:id" element={<DriverHome />} />
        <Route path="/driver/:id/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}
