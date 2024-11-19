// import React, { useState } from "react";
// import { Container, Card, Nav } from "react-bootstrap";
// import ViewBookingDetailsC from "./ViewBookingCustomer";
// import ViewServiceDetailsC from "./ViewServiceCustomer";
// import ViewVehicleDetailsC from "./ViewvehicledetailsCustomer";

// const CustomerDetailsPage = () => {
//   const [activeTab, setActiveTab] = useState("booking");

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <Container fluid style={{ marginTop: "30px" }}>
//       <Card>
//         <Card.Header>
//           <Nav fill variant="tabs" defaultActiveKey="#booking">
//             <Nav.Item>
//               <Nav.Link
//                 href="#booking"
//                 className={`nav-link ${activeTab === "booking" ? "active" : ""}`}
//                 onClick={() => handleTabChange("booking")}
//               >
//                 Booking Details
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 href="#service"
//                 className={`nav-link ${activeTab === "service" ? "active" : ""}`}
//                 onClick={() => handleTabChange("service")}
//               >
//                 Service Details
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 href="#vehicle"
//                 className={`nav-link ${activeTab === "vehicle" ? "active" : ""}`}
//                 onClick={() => handleTabChange("vehicle")}
//               >
//                 Vehicle Details
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Card.Header>
//         <Card.Body>
//           {activeTab === "booking" && <ViewBookingDetailsC />}
//           {activeTab === "service" && <ViewServiceDetailsC />}
//           {activeTab === "vehicle" && <ViewVehicleDetailsC />}
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default CustomerDetailsPage;
