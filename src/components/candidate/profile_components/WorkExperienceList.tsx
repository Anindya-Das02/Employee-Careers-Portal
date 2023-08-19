import WorkExperienceItem from "./WorkExperienceItem";
import "../../../css/WorkExperienceList.css";
import "../../../css/ProfileCommon.css";
import { useState } from "react";

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  description: string;
  editMode?: boolean;
}

function WorkExperienceList() {
  const [editMode, setEditMode] = useState(false);

  const weList: WorkExperience[] = [
    {
      id: 1,
      title: "Java Developer",
      company: "PQR Tech",
      description: "my work is to do bla bla...",
    },
    {
      id: 2,
      title: "Front-end Dev",
      company: "MNO Tech",
      description: "my work is to do bla bla...",
    },
    {
      id: 3,
      title: "PHP Developer",
      company: "KKR Tech",
      description: "my work is to do bla bla...",
    },
  ];
  const [experienceList, setExperienceList] = useState<WorkExperience[] | null>(
    weList
  );

  const handleAddExperience = () => {
    if (editMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
      if (experienceList != null) {
        experienceList.unshift({
          id: 4,
          title: "",
          company: "",
          description: "",
          editMode: true,
        });
        console.log(weList);
        setExperienceList(experienceList);
      }
    }
  };

  return (
    <>
      <div className="we-container">
        <div className="we-items">
          <div className="heading">
            <div className="title">
              <h4>Work Experience</h4>
            </div>
            <div className="edit-btn">
              <button
                onClick={handleAddExperience}
                className={
                  !editMode ? "btn btn-light btn-sm" : "btn btn-success btn-sm"
                }
              >
                {!editMode ? "Add Experience" : "Done"}
              </button>
            </div>
          </div>
          <hr />
          {experienceList
            ? experienceList.map((item) => (
                <div key={item.id} className="work-exp-item">
                  <WorkExperienceItem
                    title={item.title}
                    companyName={item.company}
                    descriptionProp={item.description}
                    newAdditionEditMode={editMode}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default WorkExperienceList;
