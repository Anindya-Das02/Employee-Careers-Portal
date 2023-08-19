import "../../../css/Resume.css";
import "../../../css/ProfileCommon.css";

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-box">
        <div className="heading">
          <div className="title">
            <h4>Resume:</h4>
          </div>
        </div>
        <hr />
        <div className="resume-content">
          <input
            type="file"
            className="form-control"
            accept="application/pdf"
            name=""
            id=""
          />
        </div>
        <div className="resume-control-buttons">
          <button className="btn btn-primary btn-sm">Download</button>
          &nbsp;
          <button className="btn btn-success btn-sm">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
