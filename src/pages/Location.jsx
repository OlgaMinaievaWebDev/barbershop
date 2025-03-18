import Contacts from "../components/Contacts";
import GoogleMap from "../components/GoogleMap";

function Location() {
  return (
    <section
      className="flex  w-full p-6 gap-6 "
      id="location"
    >
      <div className="w-1/2">
        <GoogleMap />
      </div>
      <div className="w-1/2">
        <Contacts />
      </div>
    </section>
  );
}

export default Location;
