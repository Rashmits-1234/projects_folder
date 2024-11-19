package com.excel.vehiclebooking.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.excel.vehiclebooking.entity.ServiceDetails;

public interface ServiceDetailsRepository extends JpaRepository<ServiceDetails, Integer> {

	List<ServiceDetails> findByCustomerRegisterCustomerRegId(Integer customerRegister);

	Optional<ServiceDetails> findByServiceId(Integer serviceId);
}
