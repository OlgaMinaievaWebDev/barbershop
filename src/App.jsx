import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Services from "./pages/Services";
import Location from "./pages/Location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/location" element={<Location />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
