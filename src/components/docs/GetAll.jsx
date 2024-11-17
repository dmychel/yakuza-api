import styles from "/src/styles/index.module.scss";

function GetALL() {
  return (
    <div class={styles.get_info}>
      <h2>Get All Character/Location</h2>
      <div class={styles.get_text}>
        <p>
          The last enpoint available to you is the{" "}
          <span style={{ fontFamily: "Yakuza", color: "crimson" }}>all</span>{" "}
          endpoint. This endpoint serves you all the entries in a selected
          category.
        </p>
      </div>
      <div class={`${styles.code_block} ${styles.get_code}`}>
        <p>
          GET https://rest-api-jvtz.onrender.com/
          <span style={{ color: "#66FF00" }}>character</span>/
          <span style={{ color: "#66FF00" }}>all</span>
        </p>
      </div>
    </div>
  );
}

export default GetALL;
