import { useState } from 'react';
import avatarOne from '../assets/avatar1.avif'
import avatarTwo from '../assets/avatar2.avif'
import avatarThree from '../assets/avatar3.avif'
import avatarFour from '../assets/avatar4.avif'
import Button from '../UI/Button';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DUMMY_BARBERS = [
  {
    id: 1,
    name: "Joe",
    role: "Senior Barber",
    avatar: avatarOne,
  },
  {
    id: 2,
    name: "Mike",
    role: "Junior Barber",
    avatar: avatarTwo,
  },
  {
    id: 3,
    name: "Joe",
    role: "Chris Barber",
    avatar: avatarThree,
  },
  {
    id: 4,
    name: "Any",
    role: "Any Available Barber",
    avatar: avatarFour,
  },
];

function Booking() {
  const [step, setStep] = useState(1)
  const [selectedBarber, setSelectedBarber] = useState(null)
  const [startDate, setStartDate] = useState(new Date());

 
  const handleBarberSelect = (barber) => {
    setSelectedBarber(barber)
   
  }

  const handleDateSelect = (date) => {
    setStartDate(date);
    
  };


  return (
    <>
      <div className="h-[70vh] flex flex-col items-center justify-center p-4">
        {step === 1 && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Choose Your Barber</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {DUMMY_BARBERS.map((barber) => (
                <div
                  key={barber.id}
                  className="flex flex-col items-center p-4 cursor-pointer border border-textGray rounded-lg shadow hover:bg-gray-100 transition"
                  onClick={() => handleBarberSelect(barber)}
                >
                  <img
                    src={barber.avatar}
                    alt={barber.role}
                    className="w-15 h-20 rounded-full mb-2"
                  />
                  <h3 className="font-bold text-lg  hover:text-accent transition">
                    {barber.name}
                  </h3>
                  <p className="text-sm text-textGray">{barber.role}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              {selectedBarber && (
                <Button onClick={() => setStep(2)}>Next</Button>
              )}
            </div>
          </div>
        )}
        {step === 2 && (
          <>
            <div>
              <h2 className="text-3xl font-bold mb-6">Select Date</h2>
              <DatePicker
                selected={startDate}
                onChange={handleDateSelect}
                inline
              />
            </div>
            <div className="flex justify-between items-center">
              <Button onClick={() => setStep(1)}>Back</Button>
              <Button
                onClick={() => setStep(3)}
                disabled={!startDate} // Disable button if no date is selected
              >
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Booking;
