import { useState, useEffect } from "react";
import { callAPI } from "../api/fetch";
import CodeSnippet from "./CodeSnippet";
import Example from "./Example";
import "/src/styles/demo.css";
import FetchForm from "./FetchForm";

function Demo() {
  const [loading, setLoading] = useState(true);
  const [object, setObject] = useState(null);

  useEffect(() => {
    callAPI("character/1").then((result) => {
      setLoading(false);
      setObject(result);
    });
  }, []);

  function handleSubmit(e, value) {
    e.preventDefault()
    console.log(value)
  }

  return (
    <section className="demo">
      <div className="demo_title">
        <h2>Demo</h2>
      </div>
      <div className="demo_info">
        <p>
          Below is a quick demo of what you can do with the YakuzaAPI and the kind of
          assets we provide. If you need help using the YakuzaAPI, read the
          documenation here.
        </p>
        <p>
          All the assets and character info are provided from the YakuzaAPI
          via HTTP GET request.
        </p>
      </div>
      <FetchForm handleSubmit={handleSubmit} />
      <Example loading={loading} object={object} />
      <CodeSnippet loading={loading} object={object} />
    </section>
  );
}

export default Demo;
