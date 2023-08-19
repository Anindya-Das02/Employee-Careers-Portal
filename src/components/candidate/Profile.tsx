import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../commom/NavBar";
import ValidateLogin from "../../services/ValidateLogin";
import Loading from "../commom/Loading";
import "material-icons/iconfont/material-icons.css";
import "../../css/Profile.css";
import dummyUser1 from "../../assets/imgs/dummy_user1.jpg";
import BasicDetails from "./profile_components/BasicDetails";
import Resume from "./profile_components/Resume";
import AboutMe from "./profile_components/AboutMe";
import WorkExperienceList from "./profile_components/WorkExperienceList";

function Profile() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    dummyUser1
  );
  const validateLogin = new ValidateLogin();

  // onMount
  useEffect(() => {
    if (!validateLogin.authenticationValid()) {
      console.warn("[profile] uesr auth failed");
      navigate("/");
    }
    console.log("profile auth valid...");
    setLoggedIn(true);
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        let imgSrc = e.target?.result as string;
        //console.log(imgSrc);
        setSelectedImage(imgSrc);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <>
      {!loggedIn && <Loading />}
      {loggedIn && (
        <>
          <NavBar page="profile" />
          <div className="container">
            <h1>My Profile</h1>
            <div className="row">
              <div className="profile-image-section">
                <img
                  className="candidate-image "
                  src={selectedImage}
                  alt="candidate profile photo"
                  title="candidate photo"
                />
                {/* <button className="btn btn-secondary candidate-image-upload-btn">
                  upload
                </button> */}
                <div className="candidate-image-upload-btn">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile"
                    accept="image/*"
                    aria-describedby="inputGroupFileAddon"
                    onChange={handleImageChange}
                  />
                </div>
                {/* end image section */}
              </div>
            </div>
            {/* end row #2 */}

            <div className="row">
              <BasicDetails />
            </div>
            <div className="row">
              <Resume />
            </div>
            <div className="row">
              <AboutMe />
            </div>
            <div className="row">
              <WorkExperienceList />
            </div>
            <div className="row">
              <div className="empty-row"></div>
            </div>
          </div>
          {/* end container */}
        </>
      )}
    </>
  );
}

export default Profile;
