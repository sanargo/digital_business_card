import profilePhoto from "./assets/Rectangle 90.png";
import emailLogo from "./assets/Mail.png";
import linkedinLogo from "./assets/Vector.svg";
import "./Info.css";

function Info() {
  return (
    <>
      <img className="profile-photo" src={profilePhoto} alt="" />
      <div className="info-container">
        <h1>Laura Smith</h1>
        <h6>Fronted Developer</h6>
        <a href="#">laurasmith.website</a>
      </div>
      <div className="info-btns">
        <button className="email-btn">
          <img src={emailLogo} alt="" /> Email
        </button>
        <button className="linkedin-btn">
          <img src={linkedinLogo} alt="" /> LinkedIn
        </button>
      </div>
    </>
  );
}

export default Info;
