import Demo from "/src/components/Demo";
import Intro from "/src/components/Intro";
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
