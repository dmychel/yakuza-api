import { Link } from "react-router-dom";

function Error() {
  return (
    <section
      className="error_wrapper"
      style={{ backgroundImage: `url("assets/kiryu-404.jpg")` }}
    >
      <div className="error">
        <h2>Looks like this page doesn&apos;t exist</h2>
        <Link to="/"> Go Back</Link>
      </div>
    </section>
  );
}

export default Error;
