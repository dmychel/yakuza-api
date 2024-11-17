// npm package
import { BrowserRouter, Routes, Route } from "react-router-dom";

// routes
import Index from "/src/routes/Index";
import MyRevelations from "/src/routes/MyRevelations";
import About from "/src/routes/About";

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
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </main>
      </section>
    </BrowserRouter>
  );
}

export default App;
