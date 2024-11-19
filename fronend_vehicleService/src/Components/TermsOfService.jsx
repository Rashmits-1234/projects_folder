import React from "react";
import { Container, Typography, Box } from "@mui/material";

const TermsOfService = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Terms of Service
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Vehicle Service Portal. These terms and conditions outline the rules and regulations for the use of our website.
        </Typography>
        <Typography variant="body1" paragraph>
          By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Vehicle Service Portal's website if you do not accept all of the terms and conditions stated on this page.
        </Typography>
        <Typography variant="h6" gutterBottom>
          License
        </Typography>
        <Typography variant="body1" paragraph>
          Unless otherwise stated, Vehicle Service Portal and/or its licensors own the intellectual property rights for all material on Vehicle Service Portal. All intellectual property rights are reserved. You may view and/or print pages from http://vehicleserviceportal.com for your own personal use subject to restrictions set in these terms and conditions.
        </Typography>
        <Typography variant="h6" gutterBottom>
          User Comments
        </Typography>
        <Typography variant="body1" paragraph>
          This Agreement shall begin on the date hereof.
        </Typography>
        <Typography variant="body1" paragraph>
          Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material, and data ('Comments') in areas of the website. Vehicle Service Portal does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of Vehicle Service Portal, its agents, or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion. To the extent permitted by applicable laws, Vehicle Service Portal shall not be responsible or liable for the Comments or for any loss cost, liability, damages, or expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Hyperlinking to our Content
        </Typography>
        <Typography variant="body1" paragraph>
          The following organizations may link to our website without prior written approval:
        </Typography>
        <Typography variant="body1" component="ul">
          <li>Government agencies;</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
          <li>Online directory distributors when they list us in the directory may link to our website in the same manner as they hyperlink to the websites of other listed businesses;</li>
          <li>System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
        </Typography>
        {/* Add more sections as needed */}
      </Box>
    </Container>
  );
};

export default TermsOfService;
