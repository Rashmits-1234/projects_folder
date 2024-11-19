package com.excel.vehiclebooking.util;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Component;
import com.excel.vehiclebooking.dto.BookinDto;
import com.excel.vehiclebooking.dto.CustomerRegistrationDto;
import com.excel.vehiclebooking.dto.ServiceDetailsDto;
import com.excel.vehiclebooking.dto.VehicleRegistrationDto;
import com.excel.vehiclebooking.entity.Booking;
import com.excel.vehiclebooking.entity.CustomerRegistration;
import com.excel.vehiclebooking.entity.ServiceDetails;
import com.excel.vehiclebooking.entity.VehicleRegistration;

@Component
public class CustomerUtil {

	public static CustomerRegistration dtoToCustomerRegistrationEntity(CustomerRegistrationDto dto) {
		return CustomerRegistration.builder().customerRegId(dto.getCustomerRegId()).customerName(dto.getCustomerName())
				.customerPassword(dto.getCustomerPassword()).customerEmail(dto.getCustomerEmail())
				.customerPhoneNumber(dto.getCustomerPhoneNumber()).customerAddress(dto.getCustomerAddress())
				.customerCity(dto.getCustomerCity()).vehicleNumber(dto.getVehicleNumber()).build();
	}

	public static CustomerRegistrationDto customerRegistrationEntityToDto(CustomerRegistration entity) {
		return CustomerRegistrationDto.builder().customerRegId(entity.getCustomerRegId())
				.customerName(entity.getCustomerName()).customerPassword(entity.getCustomerPassword())
				.customerEmail(entity.getCustomerEmail()).customerPhoneNumber(entity.getCustomerPhoneNumber())
				.customerAddress(entity.getCustomerAddress()).customerCity(entity.getCustomerCity())
				.vehicleNumber(entity.getVehicleNumber()).build();
	}

	public static List<ServiceDetails> serviceDtoToEntity(List<ServiceDetailsDto> serviceDetails) {
		return serviceDetails
				.stream().map(s -> ServiceDetails.builder().packageCost(s.getPackageCost())
						.packageName(s.getPackageName()).serviceDescription(s.getServiceDescription()).build())
				.collect(Collectors.toList());
	}

	public static ServiceDetailsDto serviceEntityToDto(ServiceDetails details) {
		return ServiceDetailsDto.builder().customerRegId(details.getCustomerRegister().getCustomerRegId())
				.vehicleRegId(details.getVehicleRegister().getVehicleRegId()).serviceId(details.getServiceId())
				.serviceDescription(details.getServiceDescription()).packageName(details.getPackageName())
				.packageCost(details.getPackageCost()).build();
	}

	public static List<Booking> bookingDtoToEntity(List<BookinDto> list) {
		return list.stream()
				.map(b -> Booking.builder().bookingTime(b.getBookingTime()).bookingDate(b.getBookingDate()).build())
				.collect(Collectors.toList());
	}

	public static BookinDto bookingEntityToDto(Booking entity) {
		return BookinDto.builder().customerRegId(entity.getCustomerRegister().getCustomerRegId())
				.bookingTime(entity.getBookingTime()).bookingId(entity.getBookingId())
				.bookingDate(entity.getBookingDate()).build();
	}

	public static List<VehicleRegistration> vehicleDtoToEntity(List<VehicleRegistrationDto> list) {
		return list.stream()
				.map(v -> VehicleRegistration.builder().vehicleRegId(v.getVehicleRegId())
						.vehicleModel(v.getVehicleModel()).vehicleNo(v.getVehicleNo()).build())
				.collect(Collectors.toList());
	}

	public static VehicleRegistrationDto vehicleEntityToDto(VehicleRegistration entity) {
		return VehicleRegistrationDto.builder().vehicleRegId(entity.getVehicleRegId())
				.customerRegId(entity.getCustomerRegister().getCustomerRegId()).vehicleModel(entity.getVehicleModel())
				.vehicleNo(entity.getVehicleNo())
				.build();
	}
}
