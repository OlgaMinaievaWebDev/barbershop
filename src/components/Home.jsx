import { Link, useNavigate } from "react-router-dom";
import heroImg from "../assets/barber-hero.jpg";
import Button from "../UI/Button";

function Home() {
  const navigate = useNavigate();
  const goBooking = () => {
    navigate("/booking");
  };

  return (
    <section
      id="home"
      className="relative px-4 h-[80vh] flex flex-col gap-4 justify-center items-center scroll-smooth"
    >
      <h1 className="z-20 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center">
        Classic <span className="text-accent">&</span> Modern Haircuts
      </h1>
      <Button
        onClick={goBooking}
        className="mt-4 sm:mt-6 px-6 py-3 text-lg sm:text-xl bg-accent text-white rounded-lg hover:bg-opacity-90 transition"
      >
        Book Now
      </Button>
      <img
        src={heroImg}
        alt="man shave"
        className="absolute opacity-80 top-0 left-0 w-full h-full object-cover grayscale z-10"
      />
    </section>
  );
}

export default Home;
