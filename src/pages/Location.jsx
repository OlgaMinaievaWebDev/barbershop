import Contacts from "../components/Contacts";
import GoogleMap from "../components/GoogleMap";

function Location() {
  return (
    <section
      className="flex flex-row w-full p-6 gap-6 items-start bg-textGray text-white"
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
