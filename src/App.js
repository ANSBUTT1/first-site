import { Routes, Route } from "react-router-dom";  // No need to import BrowserRouter here
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Testimonial from "./Component/Testimonial";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Navbar />
   
      <Routes>  {/* Directly use Routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
