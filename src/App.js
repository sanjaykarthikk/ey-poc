import s from "./style.module.css";
import profilePic from "./assets/Images/profile_pic.jpg";

export function App() {
  return (
    <div className={s.main_container}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>LOGO</div>
            <div>Subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%", marginTop: "10px" }} type="text" />
          </div>
          <div className="col-4 profile_pic_div">
            <img
              src={profilePic}
              alt="Profile Picture"
              className={s.profile_pic}
            />
          </div>
        </div>
      </div>
      <div className={s.list_container}>List Container</div>
      <div className={s.footer}> Footer </div>
    </div>
  );
}
