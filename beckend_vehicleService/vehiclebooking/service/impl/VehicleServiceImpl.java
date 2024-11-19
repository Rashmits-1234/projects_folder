package com.excel.vehiclebooking.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.excel.exception.LoginFailedException;
import com.excel.vehiclebooking.constant.Vehicleconstants;
import com.excel.vehiclebooking.dto.BookinDto;
import com.excel.vehiclebooking.dto.BookingListDto;
import com.excel.vehiclebooking.dto.CustomerRegistrationDto;
import com.excel.vehiclebooking.dto.ServiceDetailsDto;
import com.excel.vehiclebooking.dto.ServiceDetailsListDto;
import com.excel.vehiclebooking.dto.VehicleListDto;
import com.excel.vehiclebooking.dto.VehicleRegistrationDto;
import com.excel.vehiclebooking.entity.Booking;
import com.excel.vehiclebooking.entity.CustomerRegistration;
import com.excel.vehiclebooking.entity.ServiceDetails;
import com.excel.vehiclebooking.entity.VehicleRegistration;
import com.excel.vehiclebooking.exception.CustomerException;
import com.excel.vehiclebooking.exception.ServiceNotFoundException;
import com.excel.vehiclebooking.repository.BookingRepository;
import com.excel.vehiclebooking.repository.CustomerRepository;
import com.excel.vehiclebooking.repository.ServiceDetailsRepository;
import com.excel.vehiclebooking.repository.VehicleRepository;
import com.excel.vehiclebooking.service.VehicleService;
import com.excel.vehiclebooking.util.CustomerUtil;

@Service
public class VehicleServiceImpl implements VehicleService {

	@Autowired
	private ServiceDetailsRepository serviceDetailsRepository;

	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private BookingRepository bookingRepository;

	@Autowired
	private VehicleRepository vehicleRepository;

	@Autowired
	private JavaMailSender emailSender;

//==========================================================ServiceDetails=====================================================================

	@Override
	public String addServiceDetails(ServiceDetailsListDto dto) {
		Optional<CustomerRegistration> optional = customerRepository.findByCustomerRegId(dto.getCustomerRegId());
		Optional<VehicleRegistration> optional2 = vehicleRepository.findByVehicleRegId(dto.getVehicleRegId());
		if (optional.isPresent() && optional2.isPresent()) {
			CustomerRegistration customer = optional.get();
			VehicleRegistration vehicle = optional2.get();
			List<ServiceDetails> serviceDetails = CustomerUtil.serviceDtoToEntity(dto.getServiceDetails());
			customer.setServiceDetails(serviceDetails);
			vehicle.setServiceDetails(serviceDetails);
			serviceDetails.stream().forEach(c -> c.setCustomerRegister(customer));
			serviceDetails.stream().forEach(v -> v.setVehicleRegister(vehicle));
			customerRepository.save(customer).getCustomerRegId();
			return Integer.toString(0);
		}
		throw new CustomerException("Service Not Found");
	}

	@Override
	public List<ServiceDetailsDto> getService() {
		return serviceDetailsRepository.findAll().stream().map(CustomerUtil::serviceEntityToDto)
				.collect(Collectors.toList());
	}

	@Override
	public String deleteService(ServiceDetailsDto dto) {

		Optional<ServiceDetails> serviceOptional1 = serviceDetailsRepository.findById(dto.getServiceId());
		if (serviceOptional1.isPresent()) {
			serviceDetailsRepository.delete(serviceOptional1.get());
		} else {
			throw new ServiceNotFoundException(Vehicleconstants.SERVICE_IDNOT_FOUND);
		}
		return null;
	}

	@Override
	public String updateService(ServiceDetailsDto serviceDetailsDto) {
		Optional<ServiceDetails> serviceOptional1 = serviceDetailsRepository
				.findByServiceId(serviceDetailsDto.getServiceId());
		if (serviceOptional1.isPresent()) {
			ServiceDetails serviceDetails = serviceOptional1.get();
			serviceDetails.setPackageCost(serviceDetailsDto.getPackageCost());
			serviceDetails.setPackageName(serviceDetailsDto.getPackageName());
			serviceDetails.setServiceDescription(serviceDetailsDto.getServiceDescription());
			serviceDetails.setServiceId(serviceDetailsDto.getServiceId());
			return serviceDetailsRepository.save(serviceDetails).getServiceDescription();
		} else {
			throw new ServiceNotFoundException(Vehicleconstants.SERVICE_IDNOT_FOUND);
		}
	}

	@Override
	public List<ServiceDetailsDto> getServicebyCustomerId(Integer customerRegId) {
		List<ServiceDetails> option = serviceDetailsRepository.findByCustomerRegisterCustomerRegId(customerRegId);
		if (!option.isEmpty()) {

			return option.stream().map(CustomerUtil::serviceEntityToDto).collect(Collectors.toList());
		}
		return null;
	}
	
	@Override
	public ServiceDetailsDto getByServiceId(Integer id) {
		try {
			Optional<ServiceDetails> optional = serviceDetailsRepository.findByServiceId(id);
			if (optional.isPresent()) {
				ServiceDetails serviceDetails = optional.get();
				return CustomerUtil.serviceEntityToDto(serviceDetails);
			}
			throw new CustomerException("Service Not Found" + id);
		} catch (Exception e) {
			throw new CustomerException("Something went wrong while fetching service id");
		}
	}

	// ===================================================CustomerRegistartion===========================================================

	@Override
	public Integer saveCustomer(CustomerRegistrationDto customerRegistrationDto) {
		try {
		Optional<CustomerRegistration> optional = customerRepository
				.findByCustomerEmail(customerRegistrationDto.getCustomerEmail());
		if (!optional.isPresent()) {
			CustomerRegistration customerEntity = CustomerUtil.dtoToCustomerRegistrationEntity(customerRegistrationDto);
			return customerRepository.save(customerEntity).getCustomerRegId();
		}
		throw new CustomerException(Vehicleconstants.CUSTOMER_ALREADY_PRESENT);
	}catch (Exception e) {
		throw new CustomerException("Wrong phone number");
	}
}

	@Override
	public List<CustomerRegistrationDto> getCustomer() {
		new CustomerUtil();
		return customerRepository.findAll().stream()
				.map(customer -> CustomerUtil.customerRegistrationEntityToDto(customer)).collect(Collectors.toList());

	}

//=========================================================Booking===============================================================
	@Override
	public String saveBooking(BookingListDto dto) {
		Optional<CustomerRegistration> optional1 = customerRepository.findByCustomerRegId(dto.getCustomerRegId());
		if (optional1.isPresent()) {
			CustomerRegistration customer = optional1.get();
			List<Booking> bookingDetails = CustomerUtil.bookingDtoToEntity(dto.getBooking());
			customer.setBooking(bookingDetails);
			bookingDetails.stream().forEach(b -> b.setCustomerRegister(customer));
			return customerRepository.save(customer).getCustomerRegId().toString();
		}
		return null;
	}

	@Override
	public List<BookinDto> getBooking() {
		new CustomerUtil();
		return bookingRepository.findAll().stream().map(booking -> CustomerUtil.bookingEntityToDto(booking))
				.collect(Collectors.toList());
	}

	@Override
	public BookinDto getByBooingId(Integer id) {
		try {
			Optional<Booking> optional = bookingRepository.findByBookingId(id);
			if (optional.isPresent()) {
				Booking booking = optional.get();
				return CustomerUtil.bookingEntityToDto(booking);
			}
			throw new CustomerException("Booking Not Found" + id);
		} catch (Exception e) {
			throw new CustomerException("Something went wrong while fetching booking id");
		}
	}

	@Override
	public List<BookinDto> getBookingByCustomerRegId(Integer customerRegId) {
		List<Booking> option = bookingRepository.findByCustomerRegisterCustomerRegId(customerRegId);
		if (!option.isEmpty()) {
			return option.stream().map(CustomerUtil::bookingEntityToDto).collect(Collectors.toList());
		}
		return null;
	}

//======================================================Vehicle================================================================

	@Override
	public String saveVehicleDetails(VehicleListDto dto) {
		Optional<CustomerRegistration> optional1 = customerRepository.findByCustomerRegId(dto.getCustomerRegId());
		if (optional1.isPresent()) {
			CustomerRegistration customer = optional1.get();
			List<VehicleRegistration> vehicleDetails = CustomerUtil.vehicleDtoToEntity(dto.getVehicleRegister());
			customer.setVehicleRegister(vehicleDetails);
			vehicleDetails.stream().forEach(v -> v.setCustomerRegister(customer));
			return customerRepository.save(customer).getCustomerRegId().toString();
		}

		return null;
	}

	@Override
	public List<VehicleRegistrationDto> getVehicle() {
		new CustomerUtil();
		return vehicleRepository.findAll().stream().map(vehicle -> CustomerUtil.vehicleEntityToDto(vehicle))
				.collect(Collectors.toList());
	}

	@Override
	public VehicleRegistrationDto getByVehicleRegId(Integer id) {
		try {
			Optional<VehicleRegistration> optional = vehicleRepository.findByVehicleRegId(id);
			if (optional.isPresent()) {
				VehicleRegistration vehicleRegistration = optional.get();
				return CustomerUtil.vehicleEntityToDto(vehicleRegistration);
			}
			throw new CustomerException("Vehicle Not Found" + id);
		} catch (Exception e) {

			throw new CustomerException("Something went wrong while fetching vehicleRegid");
		}
	}

	@Override
	public List<VehicleRegistrationDto> getVehiclebyCustomerId(Integer customerRegId) {
		List<VehicleRegistration> option = vehicleRepository.findByCustomerRegisterCustomerRegId(customerRegId);
		if (!option.isEmpty()) {
			return option.stream().map(CustomerUtil::vehicleEntityToDto).collect(Collectors.toList());
		}
		return null;
	}

//===================================================Login===========================================================
	@Override
	public CustomerRegistrationDto login(CustomerRegistrationDto dto) {
		Optional<CustomerRegistration> email = customerRepository.findByCustomerEmail(dto.getCustomerEmail());

		if (email.isPresent()) {
			CustomerRegistration customer = email.get();
			if (customer.getCustomerPassword().equals(dto.getCustomerPassword())) {

				return CustomerUtil.customerRegistrationEntityToDto(customer);
			} else {
				throw new LoginFailedException(Vehicleconstants.LOGIN_FAILED_MESSAGE);
			}
		}
		throw new CustomerException(Vehicleconstants.CUSTOMER_NOT_FOUND_MESSAGE);
	}


//======================================smtp implementation for SMS remainder=============================================
	@Override
	public void sendSimpleMessage(String to, String subject, String text) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("admin@gmail.com");
		message.setTo(to);
		message.setSubject(subject);
		message.setText(text);
		emailSender.send(message);
	}

}


