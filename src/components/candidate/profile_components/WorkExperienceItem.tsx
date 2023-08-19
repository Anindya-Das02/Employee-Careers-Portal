import "../../../css/WorkExperienceItem.css";
// import "../../../css/ProfileCommon.css";
import { ChangeEvent, useEffect, useState } from "react";

interface WorkExperienceItemProps {
  title: string;
  companyName: string;
  descriptionProp: string;
  newAdditionEditMode?: boolean;
}

function WorkExperienceItem({
  title,
  companyName,
  descriptionProp,
  newAdditionEditMode,
}: WorkExperienceItemProps) {
  const [editMode, setEditMode] = useState(false);
  const [wexpTitle, setWexTitle] = useState("");
  const [wexpCompanyName, setWexCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [charLeft, setCharLeft] = useState(1000);

  useEffect(() => {
    setEditMode(newAdditionEditMode ? newAdditionEditMode : false);
    setWexTitle(title);
    setWexCompanyName(companyName);
    setDescription(descriptionProp);
  }, []);

  const maxDescriptionLen = 1000;

  const handleEdit = () => {
    if (editMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  const handleWorkExperienceDelete = () => {
    confirm("confirm delete?");
  };

  const handleWorkExpDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let decsriptionText = e.target.value;
    if (decsriptionText.length <= maxDescriptionLen) {
      setCharLeft(maxDescriptionLen - decsriptionText.length);
      setDescription(e.target.value);
    }
  };

  return (
    <div className="workexperience-box-container">
      <div className="workexperience-box">
        <div className="heading">
          <div className="title">
            {!editMode ? (
              <h4>{wexpTitle}</h4>
            ) : (
              <input
                type="text"
                value={wexpTitle}
                placeholder="Enter Title"
                style={{ width: "100%", marginTop: "2px" }}
                onChange={(e) => setWexTitle(e.target.value)}
              />
            )}
            <div>
              {!editMode ? (
                <h6>{wexpCompanyName}</h6>
              ) : (
                <input
                  type="text"
                  value={wexpCompanyName}
                  placeholder="Enter Company Name"
                  style={{ width: "100%", marginTop: "2px" }}
                  onChange={(e) => setWexCompanyName(e.target.value)}
                />
              )}
            </div>
          </div>
          <div className="edit-btn">
            <button
              className="btn btn-danger btn-sm"
              onClick={handleWorkExperienceDelete}
              title="delete experience"
            >
              <span className="material-icons" style={{ fontSize: "15px" }}>
                delete
              </span>
            </button>{" "}
            &nbsp;&nbsp;
            <button
              title="edit"
              onClick={handleEdit}
              className={
                !editMode ? "btn btn-light btn-sm" : "btn btn-success btn-sm"
              }
            >
              {!editMode ? (
                <span className="material-icons" style={{ fontSize: "15px" }}>
                  edit
                </span>
              ) : (
                "save"
              )}
            </button>
          </div>
        </div>
        <hr />
        <div className="we-text-area-container">
          <div className="we-text-box">
            {!editMode ? (
              description
            ) : (
              <div className="text-area-input">
                <textarea
                  className="form form-control"
                  name="we-description"
                  id="we-description"
                  rows={6}
                  value={description}
                  onChange={handleWorkExpDescription}
                ></textarea>
              </div>
            )}

            <div className="char-left">
              {editMode ? (
                <i>
                  character:&nbsp;{charLeft}/{maxDescriptionLen}
                </i>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceItem;
