import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/CompanyPortal.css";
import Cookies from "js-cookie";
import Loading from "./commom/Loading";

function CompanyPortal() {
  const navigate = useNavigate();
  const [portalLoad, setPortalLoad] = useState(false);

  const validateAuthenticationOnLoading = () => {
    const email = Cookies.get("user-email") as string;
    const password = Cookies.get("user-password") as string;

    return (
      email != null &&
      email.trim().length != 0 &&
      password != null &&
      password.trim().length != 0
    );
  };

  useEffect(() => {
    console.log("authenticating");
    if (validateAuthenticationOnLoading()) {
      console.log("user authentication successfull");
      return navigate("/profile");
    }
    console.log("after return");
    setPortalLoad(true);
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <>
      {!portalLoad && <Loading />}
      {portalLoad && (
        <>
          <div className="top-banner flex-container">
            <h1 className="company-title">XYZ Software Careers Portal</h1>
          </div>
          <div className="container page">
            <div className="row portal-button-group-parent">
              <button
                className="btn btn-outline-primary portal-btn"
                onClick={handleLogin}
              >
                login
              </button>
              <button
                className="btn btn-outline-secondary portal-btn"
                onClick={handleSignup}
              >
                signup
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CompanyPortal;
