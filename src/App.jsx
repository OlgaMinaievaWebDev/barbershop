import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Root from "./pages/Root";
import BookingPage from "./pages/Booking";

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Always visible */}
        <main className="pt-20 pb-16">
          {" "}
          {/* Adjust padding for header and footer */}
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer /> {/* Always visible */}
      </div>
    </Router>
  );
}

export default App;
