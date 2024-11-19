package com.excel.vehiclebooking.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.excel.vehiclebooking.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
	
	List<Booking> findByCustomerRegisterCustomerRegId(Integer customerRegister);

	Optional<Booking> findByBookingId(Integer bookingId);

}
