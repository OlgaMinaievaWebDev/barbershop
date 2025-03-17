import heroImg from '../assets/barber-hero.jpg'
import Button from '../UI/Button'
function Home() {
 return (
   <section
     className="relative px-4 h-[80vh] flex flex-col gap-4 justify-center items-center scroll-smooth"
     id="home"
   >
     <h1 className="z-20 text-6xl font-extrabold text-white">
       Classic <span className="text-accent">&</span> Modern Haircuts
     </h1>
     <Button>Book Now</Button>
     <img
       src={heroImg}
       alt="man shave"
       className="absolute opacity-80 top-0 left-o w-full h-full object-cover"
     />
   </section>
 );
}

export default Home
