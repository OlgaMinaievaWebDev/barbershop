import heroImg from '../assets/barber-hero.jpg'
function Home() {
 return (
  <section className="relative px-4 h-[70vh] flex flex-col gap-4 justify-center items-center">
   <h2>Hair</h2>
   <img src={heroImg} alt="man shave" className='absolute opacity-80 top-0 left-o w-full h-full object-cover'/>
  </section>
 )
}

export default Home
