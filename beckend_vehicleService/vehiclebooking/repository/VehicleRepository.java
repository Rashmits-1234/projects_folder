package com.excel.vehiclebooking.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.excel.vehiclebooking.entity.VehicleRegistration;

public interface VehicleRepository extends JpaRepository<VehicleRegistration, Integer> {
	
	List<VehicleRegistration> findByCustomerRegisterCustomerRegId(Integer customerRegister);

    Optional<VehicleRegistration> findByVehicleRegId(Integer vehicleRegId);

  
}
