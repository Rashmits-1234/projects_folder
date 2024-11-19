import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewBookingDetailsC = () => {
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState(null);
  const [reminder, setReminder] = useState(false);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const customerRegId = sessionStorage.getItem("customerRegId");

        if (customerRegId && !isNaN(parseInt(customerRegId))) {
          const response = await axios.get(
            `http://localhost:8080/api/getbookingdetails/${customerRegId}`
          );

          if (
            response.data &&
            response.data.error === false &&
            response.data.data.length > 0
          ) {
            setBooking(response.data.data[0]);
            setError(null);
            checkForNextDayBooking(response.data.data[0].bookingDate);
          } else {
            setError("No booking details found.");
          }
        } else {
          setError("Invalid customer registration ID.");
        }
      } catch (error) {
        setError("There was an error fetching the booking details!");
        console.error("Error fetching booking details:", error);
      }
    };

    fetchBookingDetails();
  }, []);

  const checkForNextDayBooking = (bookingDate) => {
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);

    const bookingDateObj = new Date(bookingDate);
    if (
      bookingDateObj.getDate() === nextDay.getDate() &&
      bookingDateObj.getMonth() === nextDay.getMonth() &&
      bookingDateObj.getFullYear() === nextDay.getFullYear()
    ) {
      setReminder(true);
    }
  };

  const formatTime = (time) => {
    const timeObj = new Date(`1970-01-01T${time}`);
    const formattedTime = timeObj.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return formattedTime;
  };

  return (
    <>
      <div className="customer-booking-background">
        <div className="customer-booking-details-container">
          {error && <p>{error}</p>}
          {booking && (
            <>
              {reminder && (
                <div className="alert alert-warning" role="alert">
                  Reminder: Your service is scheduled for tomorrow.
                </div>
              )}
              <p>
                 your vehicle - service is scheduled for{" "}
                {booking.bookingDate} at {formatTime(booking.bookingTime)}
              </p>
              <p>
                Note: Customer should bring your vehicle during office hours,
                <br />
                Morning from 9:00 AM to 12:00 PM. After that, no vehicles will
                <br />
                be taken for services.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewBookingDetailsC;
