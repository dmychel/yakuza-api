import styles from "/src/styles/header.module.scss";
import background from "/assets/images/cast-bg.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ backgroundImage: `url(${background})` }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/docs">Doc</Link>
          </li>
          <li>
            <Link to="/my-revelations">My Revelations</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
