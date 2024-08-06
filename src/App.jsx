import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Aos from "aos";
import { Header } from "./components/Header"
import Footer from "./components/Footer"
import { useEffect } from "react";


  function App() {
    useEffect(() => {
      Aos.init({
        duration: 1000
        // Optional configuration options for AOS
      });
    }, []);
  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
