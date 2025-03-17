function Contacts() {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-6 text-black">
        Contact{" "}
        <span className="uppercase text-accent font-black font-stretch-ultra">
          Us
        </span>
      </h2>
      <div className="text-center">
        <p className="mb-4">Visit us at:</p>
        <address>
          1 Mississaga Street East, <br />
          Orillia, ON L3V 1V7, <br />
          Canada
        </address>
      </div>
    </div>
  );
}

export default Contacts;
