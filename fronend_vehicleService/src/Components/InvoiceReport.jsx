import React from "react";
import { Button, Typography, Grid } from "@mui/material";
import ViewBookingDetailsC from "./ViewBookingCustomer";
import ViewServiceDetailsC from "./ViewServiceCustomer";
import ViewVehicleDetailsC from "./ViewvehicledetailsCustomer";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const InvoiceReport = () => {
  const handleDownloadInvoice = () => {
    const input = document.getElementById("invoice-container");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, "", "FAST");
      pdf.save("invoice.pdf");
    });
  };

  const customerName = sessionStorage.getItem("customerName");

  return (
    <div className="invoice-report-container" id="invoice-container">
      <Typography variant="h4">Invoice Report - {customerName}</Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} marginTop={3}>
          <Typography variant="h6">
            <b>Booking Details</b>
          </Typography>
          <ViewBookingDetailsC />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            <b>Service Details</b>
          </Typography>
          <ViewServiceDetailsC />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            <b>Vehicle Details</b>
          </Typography>
          <ViewVehicleDetailsC />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        onClick={handleDownloadInvoice}
        style={{ marginTop: 20 }}
      >
        Download Invoice
      </Button>
    </div>
  );
};

export default InvoiceReport;
