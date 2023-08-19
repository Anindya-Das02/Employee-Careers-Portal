import { ChangeEvent, useState } from "react";
import "../../../css/AboutMe.css";
import "../../../css/ProfileCommon.css";

function AboutMe() {
  const [editMode, setEditMode] = useState(false);
  const [charLeft, setCharLeft] = useState(3000);
  const [description, setDescription] = useState("Hello world");

  const handleEdit = () => {
    if (editMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  var maxCharLen = 3000;

  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let decsriptionText = e.target.value;
    if (decsriptionText.length <= maxCharLen) {
      setDescription(decsriptionText);
      setCharLeft(maxCharLen - decsriptionText.length);
    }
  };

  return (
    <div className="about-me-container">
      <div className="about-me-box">
        <div className="heading">
          <div className="title">
            <h4>Description:</h4>
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
        <div className="description-content">
          {!editMode ? (
            description
          ) : (
            <textarea
              className="form form-control description-text-box"
              name=""
              id=""
              value={description}
              rows={8}
              onChange={handleDescription}
            ></textarea>
          )}
        </div>
        {editMode ? (
          <div className="char-left">
            <i>
              Characters: {charLeft}/{maxCharLen}
            </i>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AboutMe;
