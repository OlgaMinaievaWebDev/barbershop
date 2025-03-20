import { useState } from "react";
import { format } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [step, setStep] = useState(1);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [email, setEmail] = useState("");
  const [inputData, setInputData] = useState({});

  const handleBarberSelect = (barber) => setSelectedBarber(barber);
  const handleDateSelect = (date) => setStartDate(date);
  const handleTimeSelect = (time, event) => {
    event.preventDefault();
    setSelectedTime(time);
  };

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

    // Create a FormData object
    const formData = new FormData(event.target);

    // Add additional fields to the FormData object
    if (selectedBarber) {
      formData.append("barber", selectedBarber.name);
    }
    formData.append("date", formattedDate);
    formData.append("time", selectedTime);

    // Convert FormData to a plain object
    const data = Object.fromEntries(formData.entries());
    setInputData(data);

    // Show the toast notification
    toast.success(
      `You have booked ${data.barber} on ${data.date} at ${data.time}. Check your email for confirmation.`
    );

    // Reset form after showing notification
    setStep(1);
    setSelectedBarber(null);
    setStartDate(new Date());
    setSelectedTime("");
    setEmail("");
  };

  const isEmailValid =
    email && /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);

  return (
    <>
      <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 mt-8">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Choose Your Barber</h2>
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
                {selectedBarber && (
                  <Button onClick={() => setStep(2)}>Next</Button>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <>
              <h2 className="text-3xl font-bold mb-6 text-center">
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
                <Button onClick={() => setStep(3)} disabled={!startDate}>
                  Next
                </Button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-3xl font-bold mb-6">Select Time</h2>
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
                    onClick={(event) => handleTimeSelect(time, event)}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Button onClick={() => setStep(2)}>Back</Button>
                <Button onClick={() => setStep(4)} disabled={!selectedTime}>
                  Next
                </Button>
              </div>
            </>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Confirm Booking</h2>
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
                <Button type="submit" disabled={!isEmailValid}>
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
    </>
  );
}

export default Booking;
