import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";

function Services() {
  const navigate = useNavigate();
  const goBooking = () => {
    navigate("/booking");
  };

  return (
    <section
      id="services"
      className="flex flex-col w-full px-4 sm:px-6 py-6 scroll-smooth"
    >
      <h2 className="text-3xl sm:text-4xl text-center font-bold mb-6 text-black">
        Services{" "}
        <span className="uppercase text-accent font-black font-stretch-ultra">
          &
        </span>{" "}
        Prices
      </h2>
      <Card />
      <div className="flex justify-center mb-8">
        <Button onClick={goBooking}>Book Now</Button>
      </div>
    </section>
  );
}

export default Services;
