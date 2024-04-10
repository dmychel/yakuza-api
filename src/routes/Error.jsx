import { Link } from "react-router-dom";
import "/src/styles/app.css";

function Error() {
  return (
    <section className="error_wrapper">
      <div className="error_background">
        <img src="assets/kiryu-404.jpg" />
      </div>
      <div className="error">
        <h2>Looks like this page doesn&apos;t exist</h2>
        <Link to="/"> Go Back</Link>
      </div>
    </section>
  );
}

export default Error;
