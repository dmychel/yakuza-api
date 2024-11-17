import styles from "/src/styles/index.module.scss";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div class={styles.home_wrapper}>
      <div class={styles.home_background}>
        <img src="assets/images/kiryu-disco.jpg" />
      </div>
      <div class={styles.home}>
        <div class={styles.intro}>
          <h1 style={{ fontFamily: "Yakuza" }}>
            Yakuza <span style={{ color: "crimson" }}>API</span>
          </h1>
          <p>
            A restful API designed to serve media, location, and character info
            from the Yakuza series.
          </p>

          <br />
          <h3 style={{ fontFamily: "Yakuza" }}>Breif Summary</h3>
          <p>
            This API was created to serve beginner web developers who are
            looking for cool assets for their projects.
            <br />
            <br />
            While this API is much smaller in scope and complexity (written in
            Javascript/Node, no contributors, and extremely basic code), it
            provides the same utility.
          </p>

          <br />
          <p>
            Below you can choose between a interactive demo of the API. Or my
            favorite, a small recreation of Kiryu's '
            <span style={{ color: "red", fontFamily: "Yakuza" }}>
              My Revelations
            </span>
            ' {":)"}.
          </p>
          <div class={styles.CTA}>
            <Link to="demo" class={styles.demo_card}>
              <div class={`${styles.transition} ${styles.hover_content}`}>
                <h2>API Demo</h2>
              </div>
              <img src="/assets/images/demo-back.png" alt="" />
            </Link>
            <Link to="my-revelations" class={styles.demo_card}>
              <div class={`${styles.transition} ${styles.hover_content}`}>
                <h2>My Revelations</h2>
              </div>
              <img src="/assets/images/revelations-back.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
