import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    customerRegId: "",
    bookingDate: "",
    bookingTime: "",
    bookingPeriod: "AM", 
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/booking/save",
        {
          customerRegId: parseInt(formData.customerRegId),
          booking: [
            {
              bookingDate: formData.bookingDate,
              bookingTime: formData.bookingTime,
              bookingPeriod: formData.bookingPeriod,
            },
          ],
        }
      );
      if (response.data.error) {
        setError("Error submitting form. Please try again.");
      } else {
        setSuccess("Booking details saved successfully!");
        setFormData({
          customerRegId: "",
          bookingDate: "",
          bookingTime: "",
          bookingPeriod: "AM", 
        });
      }
    } catch (error) {
      setError("Error submitting form. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="booking-background">
      <div className="booking-form-container">
        <h2>Booking Details</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="customerRegId">
            <Form.Label>Customer Registration ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter customer registration ID"
              name="customerRegId"
              value={formData.customerRegId}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="bookingDate">
            <Form.Label>Booking Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter booking date"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="bookingTime">
            <Form.Label>Booking Time</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                type="time"
                placeholder="Enter booking time"
                name="bookingTime"
                value={formData.bookingTime}
                onChange={handleChange}
                required
                step="1800"
              />
              <Form.Control
                as="select"
                name="bookingPeriod"
                value={formData.bookingPeriod}
                onChange={handleChange}
                className="ml-2"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </Form.Control>
            </div>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;
