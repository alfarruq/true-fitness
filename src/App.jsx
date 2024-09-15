import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./compenets/Footer/footer";
import Header from "./compenets/Header/header";
import Home from "./pages/Home";
import Brend from "./pages/Brend";
import OpenClub from "./pages/OpenClub";
import Contact from "./pages/Contact";
import Advantages from "./pages/Advantages/advantages";
import NotFound from "../src/pages/OpenClub/NotFound"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brend" element={<Brend />} />
          <Route path="/openclub" element={<OpenClub />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
