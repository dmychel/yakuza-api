function Docs() {
  return (
    <section className="doc_wrapper">
      <div className="docs">
        <div className="title">
          <h2>
            Yakuza <span style={{ color: "crimson" }}>API</span>
          </h2>
        </div>

        <div className="doc_child">
          <h3>Get Character or Location</h3>

          <div className="doc_info">
            <p>
              There are two categories you can request entries from: Character
              and Location
            </p>

            <p>Each category requests an entry via a number.</p>
          </div>

          <div className="doc_http">
            <span className="doc_child_title">HTTP Request</span>
            <div className="code_block doc_code">
              <span>
                GET https://rest-api-jvtz.onrender.com/
                <span style={{ color: "#66FF00" }}>&lt;category&gt;</span>/
                <span style={{ color: "#66FF00" }}>&lt;entry&gt;</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Docs;
