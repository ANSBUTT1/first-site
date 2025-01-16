import { Routes, Route } from "react-router-dom";  // No need to import BrowserRouter here
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import Projact from "./Pages/Projact";
import About from "./Pages/About";
// import Testimonial from "./Component/Testimonial";
import Footer from "./Component/Footer";
import Login from "./Pages/Login";
import Signup from "./Component/Signup";
import Contact from "./Component/Contact";

function App() {
  return (
    <>
      <Navbar />
   
      <Routes>  {/* Directly use Routes here */}
      <Route path="/contact" element={<Contact/>} />
        <Route path="/" element={<Home />} />
        <Route path="/Projact" element={<Projact/>} />
      
        <Route path="/about" element={<About/>}/>
       
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
