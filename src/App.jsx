import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Root from "./pages/Root";
import BookingPage from "./pages/Booking";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header /> {/* Always visible */}
        <main className="flex-grow pt-20 pb-16 overflow-auto">
          {" "}
          {/* Add overflow-auto for scroll */}
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </main>
        <Footer /> {/* Always visible */}
      </div>
    </Router>
  );
}

export default App;
