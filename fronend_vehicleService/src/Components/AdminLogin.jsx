import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (event) => {
    event.preventDefault();
    if (!adminEmail || !adminPassword) {
      setErrorMessage("Please enter both email and password.");
      return;
    }
    if (adminEmail === "admin" && adminPassword === "admin1234") {
      alert("Admin login successful");
      navigate("/admin-dashboard");
    } else {
      setErrorMessage("Invalid admin credentials");
    }
  };

  return (
    <div className="admin-login-background">
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" style={{ marginTop: "100px" }}>
          Admin Login
        </Typography>
        <form onSubmit={handleAdminLogin}>
          <Grid container spacing={2} justifyContent="center" mt={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="admin-email"
                label="Username"
                variant="outlined"
                required
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                error={errorMessage && !adminEmail}
                helperText={errorMessage && !adminEmail && errorMessage}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="admin-password"
                label="Password"
                variant="outlined"
                type="password"
                required
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                error={errorMessage && !adminPassword}
                helperText={errorMessage && !adminPassword && errorMessage}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>

        {errorMessage && (
          <Alert severity="error" style={{ marginTop: "20px" }}>
            {errorMessage}
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default AdminLoginPage;
