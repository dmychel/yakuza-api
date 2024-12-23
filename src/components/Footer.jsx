import background from "/assets/images/cast-bg.png";

import styles from "/src/styles/footer.module.scss";

export default function Footer() {
  return (
    <footer
      style={{ backgroundImage: `url(${background})` }}
      className={styles.footer}
    >
      <p>&#169; 2024 All Rights Reserved.</p>
      <nav>
        <a href="https://github.com/dmychel" target="_blank">
          <img src="/assets/icons/github.png" alt="Github" />
        </a>
      </nav>
    </footer>
  );
}
