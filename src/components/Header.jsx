import styles from "/src/styles/header.module.scss";
import background from "/assets/images/cast-bg.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  return (
    <header style={{ backgroundImage: `url(${background})` }}>
      <nav className={styles.desktop}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/demo">Demo</Link>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>

          <li>
            <Link to="/my-revelations">My Revelations</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <nav class={styles.mobile}>
        {active ? (
          <nav class={styles.active_menu}>
            <ul onClick={() => setActive(!active)}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/demo">Demo</Link>
              </li>
              <li>
                <Link to="/docs">Docs</Link>
              </li>

              <li>
                <Link to="/my-revelations">My Revelations</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        ) : (
          <div class={styles.menu} onClick={() => setActive(!active)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </nav>
    </header>
  );
}
