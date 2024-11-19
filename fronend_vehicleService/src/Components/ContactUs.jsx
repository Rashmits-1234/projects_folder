import React from "react";
import { Box, Typography } from "@mui/material";

const ContactUs = () => {
  return (
    <Box>
      <Typography variant="h2" sx={{ textAlign: "center", mt: 4, mb: 2 }}>
        Contact Us
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ maxWidth: 600, textAlign: "center", p: 2 }}>
          <Typography variant="body1">
            If you have any questions or inquiries, please feel free to contact
            us using the information below.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Email: info@example.com
          </Typography>
          <Typography variant="body1">Phone: +1234567890</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
