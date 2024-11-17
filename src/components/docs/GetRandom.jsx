import { Link } from "react-router-dom";
import styles from "/src/styles/index.module.scss";

function GetRandom() {
  return (
    <div class={styles.get_info}>
      <h2>Get Random Character/Location</h2>
      <div class={styles.get_text}>
        <p>
          To get a random character/location just put the value{" "}
          <span style={{ fontFamily: "Yakuza", color: "crimson" }}>random</span>{" "}
          as the last value in the endpoint after category.
        </p>
      </div>
      <div class={`${styles.code_block} ${styles.get_code}`}>
        <p>
          GET https://rest-api-jvtz.onrender.com/
          <span style={{ color: "#66FF00" }}>character</span>/
          <span style={{ color: "#66FF00" }}>random</span>
        </p>
      </div>
      <div class={styles.get_text}>
        <p>
          You can try the random endpoint from the interactive{" "}
          <Link to="/" style={{ fontFamily: "Yakuza" }}>
            home page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default GetRandom;
