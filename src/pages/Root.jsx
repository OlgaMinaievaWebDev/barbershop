import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../pages/About";
import Home from "../pages/Home";
import Location from "../pages/Location";
import Services from "../pages/Services";

function Root() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Location />
      <Footer />
    </>
  );
}

export default Root;
