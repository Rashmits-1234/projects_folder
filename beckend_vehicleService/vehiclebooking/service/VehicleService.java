package com.excel.vehiclebooking.service;

import java.util.List;
import com.excel.vehiclebooking.dto.BookinDto;
import com.excel.vehiclebooking.dto.BookingListDto;
import com.excel.vehiclebooking.dto.CustomerRegistrationDto;
import com.excel.vehiclebooking.dto.ServiceDetailsDto;
import com.excel.vehiclebooking.dto.ServiceDetailsListDto;
import com.excel.vehiclebooking.dto.VehicleListDto;
import com.excel.vehiclebooking.dto.VehicleRegistrationDto;

public interface VehicleService {

	String addServiceDetails(ServiceDetailsListDto dto);

	List<ServiceDetailsDto> getService();

	String deleteService(ServiceDetailsDto dto);

	String updateService(ServiceDetailsDto serviceDetailsDto);

	Integer saveCustomer(CustomerRegistrationDto customerRegistrationDto);

	String saveBooking(BookingListDto bookinDto);

	List<BookinDto> getBooking();

	String saveVehicleDetails(VehicleListDto dto);

	List<VehicleRegistrationDto> getVehicle();

	CustomerRegistrationDto login(CustomerRegistrationDto dto);

	ServiceDetailsDto getByServiceId(Integer id);

	BookinDto getByBooingId(Integer id);

	VehicleRegistrationDto getByVehicleRegId(Integer id);

	List<CustomerRegistrationDto> getCustomer();

	List<ServiceDetailsDto> getServicebyCustomerId(Integer customerRegId);

	List<VehicleRegistrationDto> getVehiclebyCustomerId(Integer customerRegId);

	List<BookinDto> getBookingByCustomerRegId(Integer customerRegId);

	void sendSimpleMessage(String to, String subject, String text);


}
