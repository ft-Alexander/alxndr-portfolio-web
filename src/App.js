import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/alxndr-portfolio-web/" element={<Home />} />
        <Route path="/alxndr-portfolio-web/about" element={<About />} />
        <Route path="/alxndr-portfolio-web/contact" element={<Contact />} />
        <Route path="/alxndr-portfolio-web/projects" element={<Projects />} />
        <Route path="/alxndr-portfolio-web/technologies" element={<Technologies />} />
      </Routes>
    </Router>
  );
}
export default App;
