import GetALL from "../components/docs/GetAll";
import GetEntry from "../components/docs/GetEntry";
import GetRandom from "../components/docs/GetRandom";

function Docs() {
  return (
    <section className="doc_wrapper">
      <div className="doc_background">
        <img src="assets/back.jpg" />
      </div>

      <div className="doc_info">
        <h2 style={{ fontFamily: "Yakuza" }}>
          Yakuza <span style={{ color: "crimson" }}>API</span>
        </h2>
        <p>
          There are two main endpoints you can request data from:{" "}
          <span style={{ fontFamily: "Yakuza", color: "crimson" }}>
            character
          </span>
          , and{" "}
          <span style={{ fontFamily: "Yakuza", color: "crimson" }}>
            location
          </span>
        </p>

        <GetEntry />
        <GetRandom />
        <GetALL />
      </div>
    </section>
  );
}

export default Docs;
