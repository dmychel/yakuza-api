import Content from "./components/Content";
import "/src/styles/app.css";

function App() {
  return (
    <>
      <header>
        <h1>Yakuza API</h1>
        <p>
          By <span>Dylon Crowley-Perez</span>
        </p>
      </header>
      <main>
        <Content />
      </main>
    </>
  );
}

export default App;
