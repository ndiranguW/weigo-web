import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import { Home } from "./pages";
import { About } from "./pages";
import { Contact } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
