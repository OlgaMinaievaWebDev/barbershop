import Contacts from "../components/Contacts";
import GoogleMap from "../components/GoogleMap";

function Location() {
  return (
    <section
      className="flex flex-col sm:flex-row w-full p-4 sm:p-6 gap-6 scroll-smooth"
      id="location"
    >
      <div className="w-full sm:w-1/2">
        <GoogleMap />
      </div>
      <div className="w-full sm:w-1/2">
        <Contacts />
      </div>
    </section>
  );
}

export default Location;
