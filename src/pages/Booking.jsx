import { useState } from "react";
import { format } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import avatarOne from "../assets/avatar1.avif";
import avatarTwo from "../assets/avatar2.avif";
import avatarThree from "../assets/avatar3.avif";
import avatarFour from "../assets/avatar4.avif";
import Button from "../UI/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DUMMY_BARBERS = [
  { id: 1, name: "Joe", role: "Senior Barber", avatar: avatarOne },
  { id: 2, name: "Mike", role: "Junior Barber", avatar: avatarTwo },
  { id: 3, name: "Chris", role: "Chris Barber", avatar: avatarThree },
  { id: 4, name: "Any", role: "Any Available Barber", avatar: avatarFour },
];

const availableTimes = [
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

function Booking() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [email, setEmail] = useState("");

  const handleBarberSelect = (barber) => setSelectedBarber(barber);
  const handleDateSelect = (date) => setStartDate(date);
  const handleTimeSelect = (time) => setSelectedTime(time);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation: check if all fields are filled
    if (!selectedBarber || !startDate || !selectedTime || !email) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Format the date
    const formattedDate = format(startDate, "yyyy-MM-dd");

    // Show the toast notification
    toast.success(
      `You have booked ${selectedBarber.name} on ${formattedDate} at ${selectedTime}. Check your email for confirmation.`
    );

    // Redirect to the confirmation page
    navigate("/confirmation");

    // Reset form after showing notification
    setStep(1);
    setSelectedBarber(null);
    setStartDate(new Date());
    setSelectedTime("");
    setEmail("");
  };

  const isEmailValid =
    email && /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);

  const isStep1Valid = selectedBarber !== null;
  const isStep2Valid = startDate !== null;
  const isStep3Valid = selectedTime !== "";
  const isStep4Valid = isEmailValid;

  return (
    <>
     <div className="flex flex-col min-h-screen">
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 mt-8 flex-grow">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold mb-6 mt-16">
                Choose Your Barber
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {DUMMY_BARBERS.map((barber) => (
                  <div
                    key={barber.id}
                    className={`flex flex-col items-center p-4 border rounded-lg shadow hover:bg-gray-100 transition cursor-pointer ${
                      selectedBarber?.id === barber.id ? "bg-gray-100" : ""
                    }`}
                    onClick={() => handleBarberSelect(barber)}
                  >
                    <img
                      src={barber.avatar}
                      alt={barber.role}
                      className="w-15 h-20 rounded-full mb-2"
                    />
                    <h3 className="font-bold text-lg">{barber.name}</h3>
                    <p className="text-sm text-gray-500">{barber.role}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <Button onClick={() => setStep(2)} disabled={!isStep1Valid}>
                  Next
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <>
              <h2 className="text-3xl font-bold mb-6 text-center  mt-16">
                Select Date
              </h2>
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-md">
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateSelect}
                    inline
                    minDate={new Date()}
                    calendarClassName="custom-calendar"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <Button onClick={() => setStep(1)}>Back</Button>
                <Button onClick={() => setStep(3)} disabled={!isStep2Valid}>
                  Next
                </Button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-3xl font-bold mb-6 mt-16">Select Time</h2>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`px-4 py-2 rounded-lg border ${
                      selectedTime === time
                        ? "bg-accent text-white"
                        : "bg-white text-gray-700"
                    } transition`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Button onClick={() => setStep(2)}>Back</Button>
                <Button onClick={() => setStep(4)} disabled={!isStep3Valid}>
                  Next
                </Button>
              </div>
            </>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-3xl font-bold mb-6  mt-16">
                Confirm Booking
              </h2>
              <div className="mb-6 space-y-4">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <Button onClick={() => setStep(3)}>Back</Button>
                <Button type="submit" disabled={!isStep4Valid}>
                  Confirm Booking
                </Button>
              </div>
            </div>
          )}
        </form>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          style={{ zIndex: 10000 }}
          />
          </div>
      </div>
    </>
  );
}

export default Booking;
