import styles from "/src/styles/index.module.scss";
import Demo from "/src/components/Demo";

export default function Index() {
  return (
    <div class={styles.home_wrapper}>
      <div class={styles.home_background}>
        <img src="assets/images/kiryu-disco.jpg" />
      </div>

      <div class={styles.intro}>
        <h1 style={{ fontFamily: "Yakuza" }}>
          Yakuza <span style={{ color: "crimson" }}>API</span>
        </h1>
        <p>
          A restful API designed to serve media, location, and character info
          from the Yakuza series.
        </p>
      </div>
      <Demo />
    </div>
  );
}
