import Content from "./components/Content";
import "/src/styles/app.css";

function App() {
  return (
    <>
      <header>
        <p>
          By <span>Dylon Crowley-Perez</span>
        </p>
      </header>
      <main>
        <div className="background">
          <img src="/assets/purchase_bg.jpg" alt="" />
        </div>
        <Content />
      </main>
    </>
  );
}

export default App;
