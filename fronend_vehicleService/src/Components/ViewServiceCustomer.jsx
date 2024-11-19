import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewServiceDetailsC = () => {
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const customerRegId = sessionStorage.getItem("customerRegId");

        if (customerRegId && !isNaN(parseInt(customerRegId))) {
          const response = await axios.get(
            `http://localhost:8080/api/get/${customerRegId}`
          );

          if (!response.data.error) {
            setService(response.data.data);
          } else {
            setError(response.data.message);
          }
        } else {
          setError("Invalid customer registration ID.");
        }
      } catch (error) {
        setError("There was an error fetching the service details!");
        console.error("Error fetching service details:", error);
      }
    };

    fetchServiceDetails();
  }, []);

  return (
    <div className="customer-service-background">
      <div className="customer-service-details-container">
        {error && <p>{error}</p>}
        {service && (
          <div style={{ paddingTop: "0px" }}>
            <p>you have opt for Service: {service.serviceDescription}</p>
            <p>Service Package Name: {service.packageName}</p>
            <p>
              The Service Package Cost as per your requirement : ₹{" "}
              {service.packageCost}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewServiceDetailsC;
