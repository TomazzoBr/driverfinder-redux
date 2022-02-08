// import { useDispatch } from "react-redux";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

import Home from "../Home/Home.jsx";
import CompanyHome from "../Company/CompanyHome/CompanyHome.jsx";
import CompanyJobs from "../Company/CompanyJobs/CompanyJobs.jsx";
import DriverHome from "../Driver/DriverHome.jsx";
import Jobs from "../Jobs/Jobs.jsx";

export default function Dashboard() {
  return (
    <div className="flex w-full h-full content-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:id" element={<CompanyHome />} />
        <Route path="/company/:id/jobs" element={<CompanyJobs />} />
        <Route path="/driver/:id" element={<DriverHome />} />
        <Route path="/driver/:id/jobs" element={<Jobs />} />
      </Routes>
    </div>
  );
}
