// components
import CodeSnippet from "/src/components/CodeSnippet";
import Example from "/src/components/Example";
import FetchForm from "/src/components/FetchForm";

// functions
import { useState, useEffect } from "react";
import { callAPI } from "/src/api/fetch";

// styles
import styles from "/src/styles/index.module.scss";

// other
import { Link } from "react-router-dom";

export default function Demo() {
  const [loading, setLoading] = useState(true);
  const [object, setObject] = useState(null);

  useEffect(() => {
    callAPI("1").then((result) => {
      setLoading(false);
      setObject(result);
    });
  }, []);

  function handleSubmit(e, value) {
    e.preventDefault();
    if (value > 23) {
      return alert(
        "Currenlty there are only 23 characters in the data base. We are working on adding more :)"
      );
    } else if (value === "random") {
      callAPI(value).then((result) => {
        return setObject(result);
      });
    } else if (isNaN(value)) {
      return alert("please input a number or 'random'");
    } else {
      callAPI(value).then((result) => {
        return setObject(result);
      });
    }
  }
  return (
    <div class={styles.demo}>
      <div class={styles.home_background}>
        <img src="assets/images/kiryu-disco.jpg" />
      </div>
      <div class={styles.demo_info}>
        <h2>Demo</h2>
        <p>
          Below is a quick demo of what you can do with the YakuzaAPI and the
          kind of assets we provide. If you need help using the YakuzaAPI, read
          the{" "}
          <Link to="/docs" style={{ fontFamily: "Yakuza", color: "crimson" }}>
            documenation here.
          </Link>
        </p>
        <p>
          All the assets and character info are provided from the YakuzaAPI via
          HTTP GET request.
        </p>
      </div>
      <FetchForm handleSubmit={handleSubmit} />
      <Example loading={loading} object={object} />
      <CodeSnippet loading={loading} object={object} />
    </div>
  );
}
