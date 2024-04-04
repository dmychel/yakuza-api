import Demo from "./Demo";
import Intro from "./Intro";
import "/src/styles/content.css";

function Content() {
  return (
    <section className="content">
      <Intro />
      <Demo />
    </section>
  );
}

export default Content;
