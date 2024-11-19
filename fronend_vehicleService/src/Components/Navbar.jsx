import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          Vehicle Service Portal
        </Typography>

        <Button component={Link} to="/" color="inherit" style={{ marginRight: "1rem" }}>
          Home
        </Button>
        <Button component={Link} to="/services" color="inherit" style={{ marginRight: "1rem" }}>
          Services
        </Button>
        <Button component={Link} to="/about-us" color="inherit" style={{ marginRight: "1rem" }}>
          About Us
        </Button>
        <Button component={Link} to="/contact-us" color="inherit">
          Contact Us
        </Button>

        <Button component={Link} to="/registration" color="inherit" style={{ marginLeft: "auto" }}>
          Register
        </Button>
        <Button component={Link} to="/login" color="inherit" style={{ marginLeft: "1rem" }}>
          Customer Login
        </Button>
        <Button component={Link} to="/admin-login" color="inherit" style={{ marginLeft: "1rem" }}>
          Admin Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
