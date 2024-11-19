import React, { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import validator from "validator";
import axios from "axios";

const RegistrationPage = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setValidationErrors({});
    setErrorMessage("");
    setSuccessMessage("");

    if (
      !customerName ||
      !customerEmail ||
      !customerPassword ||
      !customerPhoneNumber ||
      !customerAddress ||
      !customerCity ||
      !vehicleNumber ||
      !confirmPassword
    ) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (customerPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!validator.isEmail(customerEmail)) {
      setValidationErrors({
        ...validationErrors,
        customerEmail: "Invalid email address.",
      });
      return;
    }

    if (!validator.isMobilePhone(customerPhoneNumber)) {
      setValidationErrors({
        ...validationErrors,
        customerPhoneNumber: "Invalid phone number.",
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/customerRegistration/save",
        {
          customerName,
          customerPassword,
          customerEmail,
          customerPhoneNumber,
          customerAddress,
          customerCity,
          vehicleNumber,
        }
      );

      console.log("Success:", response.data);
      setSuccessMessage("Registration successful!");

      resetForm();
    } catch (error) {
      setErrorMessage("Customer already exists"); 
      console.error("Error:", error);
    }
  };

  const resetForm = () => {
    setCustomerName("");
    setCustomerPassword("");
    setConfirmPassword("");
    setCustomerEmail("");
    setCustomerPhoneNumber("");
    setCustomerAddress("");
    setCustomerCity("");
    setVehicleNumber("");
  };

  const containerStyles = {
    backgroundImage: `url('https://example.com/your-background-image.jpg')`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  const formContainerStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.8)", 
    padding: "20px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "600px",
    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)", 
  };

  return (
    <div style={containerStyles}>
      <Container maxWidth="sm" style={formContainerStyles}>
        <Typography variant="h2" align="center" gutterBottom>
          Registration
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email address"
                variant="outlined"
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                error={!!validationErrors.customerEmail}
                helperText={validationErrors.customerEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                value={customerPassword}
                onChange={(e) => setCustomerPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirm Password"
                variant="outlined"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                type="tel"
                value={customerPhoneNumber}
                onChange={(e) => setCustomerPhoneNumber(e.target.value)}
                error={!!validationErrors.customerPhoneNumber}
                helperText={validationErrors.customerPhoneNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                value={customerCity}
                onChange={(e) => setCustomerCity(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Vehicle Number"
                variant="outlined"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            Register
          </Button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <Typography align="center" style={{ marginTop: "1rem" }}>
          Already an existing user? <Link to="/login">Login</Link>
        </Typography>
      </Container>
    </div>
  );
};

export default RegistrationPage;
