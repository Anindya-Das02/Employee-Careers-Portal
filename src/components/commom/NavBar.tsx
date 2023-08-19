import { Link, useNavigate } from "react-router-dom";
import CookieHandler from "../../services/CookieHandler";

interface NavBarProps {
  page: string;
}

function NavBar({ page }: NavBarProps) {
  const navigate = useNavigate();

  //const [profilePageClassName, setProfilePageClassName] = useState("nav-link");

  const handleLogout = () => {
    const cookieHandler = new CookieHandler();
    if (cookieHandler.deleteAuthCookies()) {
      navigate("/");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/company">
            XYZ Software
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={page == "jobs" ? "nav-link active" : "nav-link"}
                  to="/jobs"
                >
                  All Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    page == "appliedJobs" ? "nav-link active" : "nav-link"
                  }
                  to="/applied-jobs"
                >
                  Applied Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={page == "profile" ? "nav-link active" : "nav-link"}
                  to="/profile"
                >
                  My Profile
                </Link>
              </li>
            </ul>
            <div className="d-flex nav-item">
              <button
                className="btn btn-outline-light btn-sm"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
