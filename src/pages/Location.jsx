import Contacts from "../components/Contacts";
import GoogleMap from "../components/GoogleMap"

function Location() {
 return (
   <section
     className="flex gap-3 justify-center items-center w-full p-6 scroll-smooth"
     id="location"
   >
     <div className="w-1/2 pr-4">
       <GoogleMap />
     </div>
     <div className="w-1/2 pl-4">
       <Contacts />
     </div>
   </section>
 );
}

export default Location
