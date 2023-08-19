import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../css/Login.css";

function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submitting form");
    console.log(userEmail);
    console.log(userPassword);
    // save details to cookie
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000); // 24 hours in milliseconds
    Cookies.set("user-email", userEmail, {
      expires: expirationDate,
      path: "/",
    });
    Cookies.set("user-email", userEmail, {
      expires: expirationDate,
      path: "/careers",
    });
    Cookies.set("user-password", userPassword, {
      expires: expirationDate,
      path: "/",
    });
    Cookies.set("user-password", userPassword, {
      expires: expirationDate,
      path: "/careers",
    });
    navigate("/profile");
  };

  return (
    <>
      <div className="container">
        <div className="flex-container">
          <div className="login-form-container">
            <div className="login-form-item">
              <h1 style={{ textAlign: "center", fontSize: "45px" }}>Login</h1>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="login-form-item">
                <input
                  type="email"
                  className="form form-control"
                  id="userEmail"
                  name="userEmail"
                  placeholder="Enter Email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>
              <div className="login-form-item">
                <input
                  type="password"
                  className="form form-control"
                  id="userPassword"
                  name="userpassword"
                  placeholder="Enter Password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  required
                />
              </div>
              <div className="login-form-item">
                <input
                  type="submit"
                  className="btn btn-primary login-btn"
                  value="login"
                />
              </div>
            </form>
            <div>
              <Link to="/signup">New Candidate? Please signup</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
