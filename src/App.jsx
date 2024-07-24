import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Aos from "aos";
import { Header } from "./components/Header"
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
      </Routes>
    </>
  )
}

export default App
