import CodeSnippet from "./CodeSnippet";
import Example from "./Example";
import "/src/styles/code-block.css";
import "/src/styles/content.css";

function Content() {
  return (
    <section className="content">
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        optio debitis, reiciendis fugit quam iusto vel eos, suscipit magnam at
        tempore. Animi dolor distinctio sit quod tenetur quia iure incidunt.
      </p>
      <CodeSnippet />
      <Example />
    </section>
  );
}

export default Content;
