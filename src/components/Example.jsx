import { useEffect } from "react";
import { callAPI } from "../api/fetch";
import { useState } from "react";

import '/src/styles/example.css'

function Example() {
  const [loading, setLoading] = useState(true);
  const [object, setObject] = useState(null);
  useEffect(() => {
    callAPI("characters/1").then((result) => {
      setLoading(false);
      setObject(result);
    });
  }, []);

  return (
    <section className="example">
      {loading ? (
        "Loading..."
      ) : (
        <div className="character_profile">
          <div className="profile_background">
            <img src="/assets/back.jpg" alt="" />
          </div>
          <div className="profile_header">
            <img src={object.images[0]} alt="Kiryu Image" />
          </div>
          <div className="profile_info">
            <h2 className="character_name">{object.name}</h2>
            <p className="character_description">{object.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Example;
