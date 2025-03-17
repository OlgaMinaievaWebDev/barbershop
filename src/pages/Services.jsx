import Button from "../UI/Button";
import Card from "../UI/Card";


function Services() {
 return (
   <section className="flex flex-col w-full p-6 scroll-smooth" id="services">
     <h2 className="text-3xl text-center font-bold mb-6 text-black">
       Services{" "}
       <span className="uppercase text-accent font-black font-stretch-ultra">
         &
       </span>{" "}
       Prices 
   </h2>
   <Card />
   <div className="flex justify-center mb-8">
   <Button>Book Now</Button>
   </div >
   </section>
 );
}

export default Services
