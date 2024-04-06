// npm package
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Routes
import Index from "./routes/Index";
import Docs from "./routes/Docs";
import Error from "./routes/Error";

// css
import "/src/styles/app.css";


function App() {
  return (
    <BrowserRouter>
      <header>
        <p>
          By <span>Dylon Crowley-Perez</span>
        </p>
      </header>

      <main>
        <div className="background">
          <img src="/assets/purchase_bg.jpg" alt="" />
        </div>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/docs' element={<Docs />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
