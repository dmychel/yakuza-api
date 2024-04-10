import Demo from "/src/components/Demo";

function Home() {
  return (
    <section className="home_wrapper">
      <div className="home_background">
        <img src="assets/images/kiryu-disco.jpg" />
      </div>

      <div className="intro">
        <h1 style={{ fontFamily: "Yakuza" }}>
          Yakuza <span style={{ color: "crimson" }}>API</span>
        </h1>
        <p>
          A restful API designed to serve media, location, and character info
          from the Yakuza series.
        </p>
      </div>
      <Demo />
    </section>
  );
}

export default Home;
