// npm package
import { BrowserRouter, Routes, Route } from "react-router-dom";

// routes
import Index from "/src/routes/Index";
import MyRevelations from "/src/routes/MyRevelations";
import Docs from "./routes/Docs";
import About from "/src/routes/About";
import Demo from "/src/routes/Demo";

// components
import Header from "/src/components/Header";

// styling
import "/src/styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <section className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/my-revelations" element={<MyRevelations />}></Route>
            <Route path="/docs" element={<Docs />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/demo" element={<Demo />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </main>
      </section>
    </BrowserRouter>
  );
}

export default App;
