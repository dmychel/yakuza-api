// imports
import SnippetExample from "./SnippetExample";

import styles from "/src/styles/docs.module.scss";

function GetEntry() {
  return (
    <div class={styles.get_info}>
      <h2>Get Character/Location</h2>

      <div class={styles.get_text}>
        <p>
          The base url to the Yakuza API is
          <span
            style={{
              color: "#66FF00",
              backgroundColor: "gray",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            https://rest-api-jvtz.onrender.com/
          </span>
        </p>
        <p>
          This URL is then followed by a category, then an entry. See the
          example down below.
        </p>
      </div>

      <div class={`${styles.code_block} ${styles.get_code}`}>
        <p>
          GET https://rest-api-jvtz.onrender.com/
          <span style={{ color: "#66FF00" }}>&lt;CATEGORY&gt;</span>/
          <span style={{ color: "#66FF00" }}>&lt;ENTRY&gt;</span>
        </p>
      </div>

      <div class={styles.get_text}>
        <p>
          If you put input the values
          <span style={{ fontFamily: "Yakuza", color: "crimson" }}>
            {" "}
            character{" "}
          </span>
          and
          <span style={{ fontFamily: "Yakuza", color: "crimson" }}> 1 </span>
          you&apos;ll recieve this object as a respone:
        </p>
      </div>
      <SnippetExample character={true} />

      <div class={styles.get_text}>
        <p>
          Alternatively if you input the values
          <span style={{ fontFamily: "Yakuza", color: "crimson" }}>
            {" "}
            location{" "}
          </span>
          and
          <span style={{ fontFamily: "Yakuza", color: "crimson" }}> 1 </span>
          you&apos;ll recieve this object as a respone:
        </p>
      </div>
      <SnippetExample character={false} />
    </div>
  );
}

export default GetEntry;
