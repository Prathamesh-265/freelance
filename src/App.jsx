import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Pastors from "./Pages/Pastors";
import Mission from "./pages/Mission";
import Partner from "./pages/Partner";
import Resources from "./pages/Resources";
import Newsletter from "./pages/Newsletter";
import Devotions from "./pages/Devotions";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/pastors" element={<Pastors />} />
  <Route path="/mission" element={<Mission />} />
  <Route path="/partner" element={<Partner />} />
  <Route path="/devotions" element={<Devotions />} />
   <Route path="/newsletter" element={<Newsletter />} />
  <Route path="/resources" element={<Resources />} />
 
</Routes>
      <Footer />
    </BrowserRouter>
  );
}