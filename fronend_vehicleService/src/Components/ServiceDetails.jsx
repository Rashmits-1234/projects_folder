import React, { useState } from "react";
import axios from "axios";

const ServiceForm = () => {
  const [serviceDescription, setServiceDescription] = useState("");
  const [packageName, setPackageName] = useState("");
  const [packageCost, setPackageCost] = useState("");
  const [vehicleRegId, setVehicleRegId] = useState("");
  const [customerRegId, setCustomerRegId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const packageDetails = {
    "Car Detailing Service": {
      "Basic Detailing Package": 500,
      "Premium Detailing Package": 1000,
      "Exterior Detailing Package": 750,
    },
    "Oil Change Service": {
      "Standard Oil Change": 500,
      "Synthetic Oil Change": 1000,
      "High Mileage Oil Change": 2000,
    },
    "Brake Inspection and Repair": {
      "Brake Pad Replacement": 500,
      "Brake Fluid Flush": 500,
      "Brake Rotor Resurfacing": 1000,
    },
    "Tire Rotation Service": {
      "Standard Tire Rotation": 500,
      "Four-Wheel Tire Rotation": 500,
      "All-Season Tire Rotation": 500,
    },
    "Engine Diagnostic Service": {
      "Basic Engine Diagnostic": 1000,
      "Comprehensive Engine Diagnostic": 1500,
      "Performance Engine Diagnostic": 2000,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceDetails = {
      customerRegId: parseInt(customerRegId),
      vehicleRegId: parseInt(vehicleRegId),
      serviceDetails: [
        {
          serviceDescription,
          packageName,
          packageCost: parseFloat(packageCost),
        },
      ],
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/serviceDetails/add",
        serviceDetails
      );
      if (response.data.error === false) {
        setMessage("Service added successfully!");
        setServiceDescription("");
        setPackageName("");
        setPackageCost("");
        setVehicleRegId("");
        setCustomerRegId("");
      } else {
        setMessage("Error adding service. Please try again.");
      }
    } catch (error) {
      setMessage("Error adding service. Please try again.");
      setError(error.message);
      console.error("Error adding service:", error);
    }
  };

  const handlePackageNameChange = (e) => {
    const selectedPackageName = e.target.value;
    setPackageName(selectedPackageName);
    if (selectedPackageName && packageDetails[serviceDescription][selectedPackageName]) {
      setPackageCost(packageDetails[serviceDescription][selectedPackageName].toString());
    } else {
      setPackageCost("");
    }
  };

  return (
    <div className="service-details-background">
      <div className="service-form-container1">
        <h2>Add Service Details</h2>
        {message && <p>{message}</p>}
        {error && <p>Error: {error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Service Description:</label>
            <select
              value={serviceDescription}
              onChange={(e) => {
                setServiceDescription(e.target.value);
                setPackageName("");
                setPackageCost("");
              }}
              required
              className="form-control"
            >
              <option value="">Select Service Description</option>
              <option value="Car Detailing Service">Car Detailing Service</option>
              <option value="Oil Change Service">Oil Change Service</option>
              <option value="Brake Inspection and Repair">Brake Inspection and Repair</option>
              <option value="Tire Rotation Service">Tire Rotation Service</option>
              <option value="Engine Diagnostic Service">Engine Diagnostic Service</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Package Name:</label>
            <select
              value={packageName}
              onChange={handlePackageNameChange}
              required
              className="form-control"
            >
              <option value="">Select Package Name</option>
              {packageDetails[serviceDescription] &&
                Object.keys(packageDetails[serviceDescription]).map((pkg, index) => (
                  <option key={index} value={pkg}>
                    {pkg}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-group">
  <label className="form-label">Package Cost:</label>
  <div className="input-group">
    <span className="input-group-text">₹</span>
    <input
      type="text"
      value={packageCost}
      onChange={(e) => setPackageCost(e.target.value)}
      required
      className="form-control"
    />
  </div>
</div>
          <div className="form-group">
            <label className="form-label">Vehicle Registration ID:</label>
            <input
              type="text"
              value={vehicleRegId}
              onChange={(e) => setVehicleRegId(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Customer Registration ID:</label>
            <input
              type="text"
              value={customerRegId}
              onChange={(e) => setCustomerRegId(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn-primary">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
