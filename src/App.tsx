import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyPortal from "./components/CompanyPortal";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ErrorPage from "./components/commom/ErrorPage";
import Profile from "./components/candidate/Profile";
import Loading from "./components/commom/Loading";
import Jobs from "./components/candidate/Jobs";
import AppliedJobs from "./components/candidate/AppliedJobs";
import CompanyHomePage from "./components/CompanyHomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompanyPortal />} />
          <Route path="/careers" element={<CompanyPortal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/applied-jobs" element={<AppliedJobs />} />
          <Route path="/company" element={<CompanyHomePage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
