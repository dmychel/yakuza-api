import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error">
      <div className="error_background">
        <img src="/assets/kiryu-404.jpg" alt="" />
      </div>
      <h2>Looks like this page doesn&apos;t exist</h2>
      <Link to="/">Go Back</Link>
    </section>
  );
}

export default Error;
