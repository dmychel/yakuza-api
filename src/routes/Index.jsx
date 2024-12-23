import styles from "/src/styles/index.module.scss";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className={styles.home_wrapper}>
      <div className={styles.home_background}>
        <img src="assets/images/kiryu-disco.jpg" />
      </div>
      <div className={styles.home}>
        <div className={styles.intro}>
          <h1 style={{ fontFamily: "Yakuza" }}>
            Yakuza <span style={{ color: "rgb(143, 0, 0)" }}>API</span>
          </h1>
          <br />
          <p>
            A restful API designed to serve media, location, and character info
            from the Yakuza series.
          </p>

          <br />
          <h3 style={{ fontFamily: "Yakuza" }}>Breif Summary</h3>
          <p>
            This API was created to serve beginner web developers who are
            looking for cool assets for their projects, similar too{" "}
            <a
              href="https://gadhagod.github.io/Hyrule-Compendium-API/#/"
              target="_blank"
            >
              Hyrule Compendium API
            </a>
            .
            <br />
            <br />
            While this API is much smaller in scope and complexity (written in
            Javascript/Node, no contributors, and extremely basic code), it
            provides the same utility.
          </p>

          <br />
          <p>
            Below you can choose between a interactive demo of the API. Or my
            personal favorite, a small recreation of Kiryu&apos;s &apos;
            <span style={{ color: "rgb(143, 0, 0)", fontFamily: "Yakuza" }}>
              My Revelations
            </span>
            &apos;{":)"}.
          </p>
          <div className={styles.CTA}>
            <Link to="demo" class={styles.demo_card}>
              <div className={`${styles.transition} ${styles.hover_content}`}>
                <h2>API Demo</h2>
              </div>
              <img
                src="/assets/images/demo-back.png"
                alt=""
                className={styles.desktop_back}
              />
              <img
                src="/assets/images/mobile-demo-back.png"
                alt=""
                className={styles.mobile_back}
              />
            </Link>
            <Link to="my-revelations" class={styles.demo_card}>
              <div className={`${styles.transition} ${styles.hover_content}`}>
                <h2>My Revelations</h2>
              </div>
              <img
                src="/assets/images/revelations-back.png"
                alt=""
                className={styles.desktop_back}
              />
              <img
                src="/assets/images/mobile-revelations-back.png"
                alt=""
                className={styles.mobile_back}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
