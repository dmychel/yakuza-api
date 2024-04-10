import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
          <li>
            <Link to="/roadmap">Roadmap</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
