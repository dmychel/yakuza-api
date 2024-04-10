// npm package
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Routes
import Index from "./routes/Index";
import Docs from "./routes/Docs";
import Error from "./routes/Error";

// css
import "/src/styles/app.css";
import Roadmap from "./routes/Roadmap";

function App() {
  return (
    <BrowserRouter>
      <section className="app">
        <header style={{ backgroundImage: `url("assets/images/cast-bg.png")` }}>
          <p>
            By <span>Dylon Crowley-Perez</span>
          </p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/docs" element={<Docs />}></Route>
            <Route path="/roadmap" element={<Roadmap />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </main>
      </section>
    </BrowserRouter>
  );
}

<div className="header_background">
  <img src="/assets/back.jpg" alt="" />
</div>;

export default App;
