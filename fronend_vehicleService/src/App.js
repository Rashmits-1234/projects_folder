import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import RegistrationPage from "./Components/Registration";
import LoginPage from "./Components/LoginPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import CustomerDashboard from "./Components/CustomerDashboard";
import CustomerDetailsPage from "./Components/CustomerDetailsPage";
import AdminLoginPage from "./Components/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard";
import ContactUs from "./Components/ContactUs";
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";
import InvoiceReport from "./Components/InvoiceReport";
import TermsOfService from "./Components/TermsOfService";
 import PrivacyPolicy from "./Components/PrivacyPolicy";
import "./App.css";

const AppContent = () => {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith("/customer-dashboard") && !location.pathname.startsWith("/admin-dashboard");

  return (
    <>
      {showNavbar && <Navbar />}
      <div className="app-container">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />
            <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
            <Route path="/customer-dashboard/*" element={<CustomerDashboard />}>
              <Route path="invoice-report" element={<InvoiceReport />} />
              <Route path="customer-details" element={<CustomerDetailsPage />} />
            </Route>
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/terms-of-service" element={<TermsOfService/>}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
