import "./styles/base/base.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import { Navbar } from "./components";
import Footer from "./components/custom/Footer";
import Post from "./components/custom/Post";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <div>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:slug" element={<Post />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
