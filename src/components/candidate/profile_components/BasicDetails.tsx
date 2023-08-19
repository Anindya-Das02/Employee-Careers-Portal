import { useState } from "react";
import "../../../css/BasicDetails.css";
import "../../../css/ProfileCommon.css";

function BasicDetails() {
  const [editMode, setEditMode] = useState(false);
  const [candidateName, setCandidateName] = useState("Anindya Das");
  const [candidateContact, setCandidateContact] = useState("+91 9876543210");
  const [candidateEmailId, setCandidateEmailId] = useState("anindya@gmail.com");
  const [yoe, setYoe] = useState("3");
  const [candidateDesignation, setCandidateDesignation] =
    useState("System Engineer");
  const [candidateLocation, setCandidateLocation] =
    useState("Hyderabad, India");

  const handleEdit = () => {
    if (editMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  return (
    <div className="basic-details-container">
      <div className="basic-details">
        <div className="heading">
          <div className="title">
            <h4>Basic Details:</h4>
          </div>
          <div className="edit-btn">
            <button
              onClick={handleEdit}
              className={
                !editMode ? "btn btn-light btn-sm" : "btn btn-success btn-sm"
              }
            >
              {!editMode ? "edit" : "save"}
            </button>
          </div>
        </div>
        <hr />
        <div className="details">
          <div>
            <b>Name: &nbsp;</b>
            {!editMode ? (
              candidateName
            ) : (
              <input
                type="text"
                className="text-ip-field"
                value={candidateName}
                placeholder="Enter Name"
                onChange={(e) => setCandidateName(e.target.value)}
              />
            )}
          </div>
          <div>
            <b>Contact: &nbsp;</b>
            {!editMode ? (
              candidateContact
            ) : (
              <input
                type="text"
                className="text-ip-field"
                value={candidateContact}
                placeholder="Enter Contact"
                onChange={(e) => setCandidateContact(e.target.value)}
              />
            )}
          </div>
          <div>
            <b>Email: &nbsp;</b>
            {!editMode ? (
              candidateEmailId
            ) : (
              <input
                type="text"
                className="text-ip-field"
                value={candidateEmailId}
                placeholder="Enter Email id"
                onChange={(e) => setCandidateEmailId(e.target.value)}
              />
            )}
          </div>
          <div>
            <b>Designation: &nbsp;</b>
            {!editMode ? (
              candidateDesignation
            ) : (
              <input
                type="text"
                className="text-ip-field"
                value={candidateDesignation}
                placeholder="Enter Designation"
                onChange={(e) => setCandidateDesignation(e.target.value)}
              />
            )}
          </div>
          <div>
            <b>Work Experience: &nbsp;</b>
            {!editMode ? (
              yoe
            ) : (
              <input
                type="number"
                className="text-ip-field"
                value={yoe}
                min={0}
                onChange={(e) => setYoe(e.target.value)}
                name="yoe"
                id="yoe"
                style={{ width: "80px" }}
                placeholder="Enter experience in years"
              />
            )}
            &nbsp;years
          </div>
          <div>
            <b>Location: &nbsp;</b>
            {!editMode ? (
              candidateLocation
            ) : (
              <input
                type="text"
                className="text-ip-field"
                value={candidateLocation}
                onChange={(e) => setCandidateLocation(e.target.value)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicDetails;
