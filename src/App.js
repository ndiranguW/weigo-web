import "./styles/base/base.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Navbar } from "./components";
import Footer from "./components/custom/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <div>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
