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
import Footer from "./components/Footer";

// styling
import "/src/styles/app.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
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
        <Footer />
      </div>
    </BrowserRouter>
  );
}
