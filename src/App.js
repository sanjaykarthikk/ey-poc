import s from "./style.module.css";
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
            <input style={{ width: 100 }} type="text" />
          </div>
          <div className="col-2">Profile pic</div>
        </div>
      </div>
      <div className={s.list_container}>List Container</div>
      <div className={s.footer}> Footer </div>
    </div>
  );
}
