function Docs() {
  return (
    <section className="docs">
      <h2>Yakuza API</h2>

      <div className="get_item get">
        <h3>Get Item</h3>

        <div className="doc_character">
          <span>Get Character</span>
          <p className="endpoint">
            Endpoint:{" "}
            <span>
              /character/<span style={{ color: "#66FF00" }}>item</span>
            </span>
          </p>
        </div>

        <div className="doc_location">
          <span>Get Location</span>
          <p className="endpoint">
            Endpoint:{" "}
            <span>
              /location/<span style={{ color: "#66FF00" }}>item</span>
            </span>
          </p>
        </div>
      </div>

      <div className="get_all get">
        <h3>Get All</h3>
        <div className="doc_character">
          <span>Get all characters</span>
          <p className="endpoint">
            Endpoint:{" "}
            <span>
              /character/<span style={{ color: "#66FF00" }}>all</span>
            </span>
          </p>
        </div>

        <div className="doc_location">
          <span>Get all locations</span>
          <p className="endpoint">
            Endpoint:{" "}
            <span>
              /location/<span style={{ color: "#66FF00" }}>all</span>
            </span>
          </p>
        </div>
      </div>

      <div className="get_random get">
        <h3>Get a random Item</h3>

        <div className="doc_character">
          <span>Get a random character</span>
          <p className="endpoint">
            Endpoint:{" "}
            <span>
              /character/<span style={{ color: "#66FF00" }}>random</span>
            </span>
          </p>
        </div>

        <div className="doc_location">
          <span>Get random location</span>
          <p className="endpoint">
            Endpoint:{" "}
            <span>
              /location/<span style={{ color: "#66FF00" }}>random</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Docs;
