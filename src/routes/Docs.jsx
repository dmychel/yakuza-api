import GetALL from "../components/docs/GetAll";
import GetEntry from "../components/docs/GetEntry";
import GetRandom from "../components/docs/GetRandom";

import styles from "/src/styles/docs.module.scss";

export default function Docs() {
  return (
    <div class={styles.doc_wrapper}>
      <div class={styles.doc_background}>
        <img src="assets/images/intro_bg.jpg" />
      </div>
      <div class={styles.doc}>
        <div class={styles.doc_info} style={{ fontSize: "20px" }}>
          <h1 style={{ fontFamily: "Yakuza" }}>
            Yakuza <span style={{ color: "crimson" }}>API</span>
          </h1>
          <p>
            There are two main endpoints you can request data from:{" "}
            <span style={{ fontFamily: "Yakuza", color: "crimson" }}>
              character
            </span>
            , and{" "}
            <span style={{ fontFamily: "Yakuza", color: "crimson" }}>
              location
            </span>
          </p>

          <GetEntry />
          <GetRandom />
          <GetALL />
        </div>
      </div>
    </div>
  );
}
