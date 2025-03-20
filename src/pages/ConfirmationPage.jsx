import { Link } from "react-router-dom";

const ConfirmationPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Booking Confirmed!</h1>
      <p>
        Your appointment has been successfully booked. Check your email for
        further details.
      </p>
      <div className="mt-6">
        <Link to="/" className="text-accent font-bold underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
