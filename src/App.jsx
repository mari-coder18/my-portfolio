import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Skills from "./components/Pages/Skills";
import Projects from "./components/Pages/Project";
import Contact from "./components/Pages/Contact";
import Certifications from "./components/Pages/Certifications";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Certifications/>}/>
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;