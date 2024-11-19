import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleCustomerLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const response = await axios.post("http://localhost:8080/api/login", {
          customerPassword: customerPassword,
          customerEmail: customerEmail,
        });
        console.log("Success:", response.data);
        if (!response.data.error) {
          alert("Customer login successful");
          navigate("/customer-dashboard");
          sessionStorage.setItem(
            "customerRegId",
            response.data.data.customerRegId
          );
          sessionStorage.setItem(
            "customerEmail",
            response.data.data.customerEmail
          );
          sessionStorage.setItem(
            "customerName",
            response.data.data.customerName
          );
        } else {
          setErrorMessage("Customer not found");
        }
      } catch (error) {
        setErrorMessage("An error occurred during login.");
        console.error("Error:", error);
      }
    }
    setValidated(true);
  };

  return (
    <div className="login-background">
      <Container maxWidth="sm">
        <div className="login-container" style={{ marginTop: "100px" }}>
          <Typography variant="h3" align="center" gutterBottom>
            Customer Login
          </Typography>
          <form noValidate validated={validated} onSubmit={handleCustomerLogin}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email address"
                  placeholder="Enter email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  error={validated && !customerEmail}
                  helperText={
                    validated && !customerEmail ? "Please enter an email." : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  type="password"
                  label="Password"
                  placeholder="Password"
                  value={customerPassword}
                  onChange={(e) => setCustomerPassword(e.target.value)}
                  error={validated && !customerPassword}
                  helperText={
                    validated && !customerPassword
                      ? "Please enter a password."
                      : ""
                  }
                />
              </Grid>
            </Grid>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginTop: "1rem" }}
            >
              Login
            </Button>
          </form>

          {errorMessage && (
            <Alert severity="error" style={{ marginTop: "1rem" }}>
              {errorMessage}
            </Alert>
          )}

          <Typography align="center" style={{ marginTop: "1rem" }}>
            New User? <Link to="/registration">Register</Link>
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
