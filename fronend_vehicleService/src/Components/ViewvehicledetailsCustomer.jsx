import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewVehicleDetailsC = () => {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const customerRegId = sessionStorage.getItem("customerRegId");

        if (customerRegId && !isNaN(parseInt(customerRegId))) {
          const response = await axios.get(
            `http://localhost:8080/api/getvehicledetails/${customerRegId}`
          );

          if (
            response.data &&
            response.data.data &&
            response.data.data.length > 0
          ) {
            setVehicles(response.data.data);
            setError(null);
          } else {
            setError("No vehicle details found.");
          }
        } else {
          setError("Invalid customer registration ID.");
        }
      } catch (error) {
        setError("There was an error fetching the vehicle details!");
        console.error("Error fetching vehicle details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVehicleDetails();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="customer-vehicle-background">
      <div className="customer-vehicle-details-container">
        {error && <p>{error}</p>}
        {vehicles.length > 0 && (
          <div>
            {vehicles.map((vehicle) => (
              <div key={vehicle.vehicleRegId}>
                <p>Vehicle Model: {vehicle.vehicleModel}</p>
                <p>Vehicle Number: {vehicle.vehicleNo}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewVehicleDetailsC;
