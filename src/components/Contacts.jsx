import { FaSquareFacebook, FaSquareInstagram, FaPhone } from "react-icons/fa6";

function Contacts() {
  return (
    <div className="w-full p-6 flex flex-col items-center bg-white rounded-2xl shadow-xl space-y-6 text-black">
      <h2 className="text-3xl text-center font-bold mb-6 text-black">
        Contact{" "}
        <span className="uppercase text-accent font-black font-stretch-ultra">
          Us
        </span>
      </h2>

      {/* Phone Section */}
      <div className="flex items-center gap-2 text-xl">
        <FaPhone className="text-accent w-6 h-6" />
        <p>704-345-2255</p>
      </div>

      {/* Address Section */}
      <div className="text-center text-lg">
        <address>
          1 Mississaga Street East, <br />
          Orillia, ON L3V 1V7, <br />
          Canada
        </address>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-6 mt-4 text-3xl">
        <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
        >
          
        <FaSquareFacebook className="hover:text-accent cursor-pointer transition-colors" />
        </a>
         <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
        >
          
        <FaSquareInstagram className="hover:text-accent cursor-pointer transition-colors" />
          </a>
      </div>
    </div>
  );
}

export default Contacts;
