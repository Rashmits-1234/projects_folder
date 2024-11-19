import React from "react";
import { Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const styles = {
  footer: {
    backgroundColor: "#f5f5f5",
    padding: "20px 0",
    textAlign: "center",
  },
  footerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  footerLink: {
    color: "#333",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Vehicle Service Portal. All rights reserved.
        </Typography>
        <Typography variant="body2" style={{ margin: "0 10px" }}>
          |
        </Typography>
        <Link component={RouterLink} to="/terms-of-service" style={styles.footerLink}>
          Terms of Service
        </Link>
        <Typography variant="body2" style={{ margin: "0 10px" }}>
          |
        </Typography>
        <Link component={RouterLink} to="/privacy-policy" style={styles.footerLink}>
          Privacy Policy
        </Link>
        <Typography variant="body2" style={{ margin: "0 10px" }}>
          |
        </Typography>
        <Link component={RouterLink} to="/contact-us" style={styles.footerLink}>
          Contact Us
        </Link>
        <Typography variant="body2" style={{ margin: "0 10px" }}>
          |
        </Typography>
        <Link component={RouterLink} to="/about-us" style={styles.footerLink}>
          About Us
        </Link>
        <Typography variant="body2" style={{ margin: "0 10px" }}>
          |
        </Typography>
        <Link component={RouterLink} to="/services" style={styles.footerLink}>
          Services
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
