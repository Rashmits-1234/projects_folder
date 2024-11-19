package com.excel.vehiclebooking.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static com.excel.vehiclebooking.constant.Vehicleconstants.LOGIN_MESSAGE;

import com.excel.vehiclebooking.dto.BookinDto;
import com.excel.vehiclebooking.dto.BookingListDto;
import com.excel.vehiclebooking.dto.CustomerRegistrationDto;
import com.excel.vehiclebooking.dto.EmailRequestDto;
import com.excel.vehiclebooking.dto.ServiceDetailsDto;
import com.excel.vehiclebooking.dto.ServiceDetailsListDto;
import com.excel.vehiclebooking.dto.VehicleListDto;
import com.excel.vehiclebooking.dto.VehicleRegistrationDto;
import com.excel.vehiclebooking.response.CommonResponse;
import com.excel.vehiclebooking.service.VehicleService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class VehicleController {
	
	@Autowired
	private VehicleService vehicleService;

	
//======================================================ServiceDetails=============================================
	
	@PostMapping(path = "/serviceDetails/add")
	public ResponseEntity<CommonResponse<String>> addServiceDetails(@RequestBody ServiceDetailsListDto dto){
		String services = vehicleService.addServiceDetails(dto);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(CommonResponse.<String>builder()
				.data(services)
				.isError(false)
				.message("Service added!")
				.build());
	}
	
	@GetMapping(path = "/serviceDetails")
	public ResponseEntity<CommonResponse<List<ServiceDetailsDto>>> getService() {
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<ServiceDetailsDto>>builder()
				.data(vehicleService.getService())
				.isError(false)
				.message("Getting all serviceDetails!")
				.build());
	}
			
	@PutMapping(path="/service/update")
	public ResponseEntity<CommonResponse<String>> updateService(@RequestBody ServiceDetailsDto dto){
		String updatedService = vehicleService.updateService(dto);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(updatedService)
				.isError(false).message("Service updated!")
				.build());
	}

	@DeleteMapping(path ="/service/delete")
	ResponseEntity<CommonResponse<String>> deleteService (@RequestBody ServiceDetailsDto dto ){
		String deleteService = vehicleService.deleteService(dto);
		return ResponseEntity.status(HttpStatus.OK)
				.body(CommonResponse.<String>builder()
						.isError(false).data(deleteService)
						.message("SERVICE_DELETED")
						.build());
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<CommonResponse<ServiceDetailsDto>> getByServiceId(@PathVariable Integer id) {
		ServiceDetailsDto serviceId = vehicleService.getByServiceId(id);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<ServiceDetailsDto>builder().data(serviceId)
				.message("Fetched based on service Id").isError(false).build());
	}
	
	@GetMapping("/getservicedetails/{customerRegId}")
	public ResponseEntity<CommonResponse<List<ServiceDetailsDto>>> getServiceByCustomerRegId(@PathVariable Integer customerRegId ){
		List<ServiceDetailsDto> id = vehicleService.getServicebyCustomerId(customerRegId);
		return ResponseEntity.status(HttpStatus.OK)
				.body(CommonResponse.<List<ServiceDetailsDto>>builder()
						.data(id).message("Fetched based on customer Id")
						.isError(false)
						.build());
	}
	
	
//======================================================CustomerRegistartion=============================================
	
	@PostMapping(path = "/customerRegistration/save")
	public ResponseEntity<CommonResponse<Integer>> saveCustomer(@RequestBody CustomerRegistrationDto customerRegistrationDto){
		Integer customerRegId = vehicleService.saveCustomer(customerRegistrationDto);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(CommonResponse.<Integer>builder()
						.data(customerRegId)
						.isError(false)
						.message("Customer added successfully")
						.build());
		
	}

	@GetMapping(path = "/getAllCustomerDetails")
	public ResponseEntity<CommonResponse<List<CustomerRegistrationDto>>> getCustomer(){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<CustomerRegistrationDto>>builder()
				.data(vehicleService.getCustomer())
				.isError(false)
				.message("Get all Customer Details")
				.build());
		
	}
	

//=====================================================Booking===========================================================

	@PostMapping(path = "/booking/save")
	public ResponseEntity<CommonResponse<String>> saveBooking(@RequestBody BookingListDto dto){
		String bookingID = vehicleService.saveBooking(dto);
		return ResponseEntity.status(HttpStatus.CREATED)
						.body(CommonResponse.<String>builder()
						.data(bookingID)
						.isError(false)
						.message("Booking added successfully")
						.build());	
	}


    @GetMapping(path = "/getAllBooking")
    public ResponseEntity<CommonResponse<List<BookinDto>>> getBooking(){
    	return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<BookinDto>>builder()
   			.data(vehicleService.getBooking())
   			.isError(false)
   			.message("Get all bookings")
   			.build());
    }
    
    @GetMapping("/getbooking/{id}")
	public ResponseEntity<CommonResponse<BookinDto>> getByBooingId(@PathVariable Integer id) {
		BookinDto bookingId = vehicleService.getByBooingId(id);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<BookinDto>builder().data(bookingId)
				.message("Fetched based on booking Id").isError(false).build());
	}

    @GetMapping("/getbookingdetails/{customerRegId}")
   	public ResponseEntity<CommonResponse<List<BookinDto>>> getBookingByCustomerRegId(@PathVariable Integer customerRegId ){
   		List<BookinDto> id = vehicleService.getBookingByCustomerRegId(customerRegId);
   		return ResponseEntity.status(HttpStatus.OK)
   				.body(CommonResponse.<List<BookinDto>>builder()
   						.data(id)
   						.isError(false)
   						.build());
   	}
//===========================================Vehicle=====================================================================

    @PostMapping(path="/vehicleDetails/save")
    public ResponseEntity<CommonResponse<String>> saveVehicleDetails(@RequestBody VehicleListDto dto){
    	String vehicleRegId = vehicleService.saveVehicleDetails(dto);
    	return ResponseEntity.status(HttpStatus.CREATED)
    			.body(CommonResponse.<String>builder()
    					.data(vehicleRegId)
							.isError(false)
							.message("Vehicle Details save successfully")
							.build());
    }
    
    @GetMapping(path="/getallvehicledetails")
    public ResponseEntity<CommonResponse<List<VehicleRegistrationDto>>> getVehicle(){
    	return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<VehicleRegistrationDto>>builder()
  			.data(vehicleService.getVehicle())
    			.isError(false)
    			.message("Get all vehicle details")
    			.build());
   
   }
    
    @GetMapping("/getvehicle/{id}")
   	public ResponseEntity<CommonResponse<VehicleRegistrationDto>> getByVehicleRegId(@PathVariable Integer id) {
   		VehicleRegistrationDto vehicleRegId = vehicleService.getByVehicleRegId(id);
   		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<VehicleRegistrationDto>builder().data(vehicleRegId)
   				.message("Fetched based on booking Id").isError(false).build());
   	}
	
    @GetMapping("/getvehicledetails/{customerRegId}")
	public ResponseEntity<CommonResponse<List<VehicleRegistrationDto>>> getVehicleByCustomerRegId(@PathVariable Integer customerRegId ){
		List<VehicleRegistrationDto> id = vehicleService.getVehiclebyCustomerId(customerRegId);
		return ResponseEntity.status(HttpStatus.OK)
				.body(CommonResponse.<List<VehicleRegistrationDto>>builder()
						.data(id).message("Fetched based on customer Id")
						.isError(false)
						.build());
	}
//===========================================Customer Login=====================================================================

    @PostMapping("/login")
    public ResponseEntity<CommonResponse<CustomerRegistrationDto>> login(@RequestBody CustomerRegistrationDto dto) {
	CustomerRegistrationDto login = vehicleService.login(dto);
	return ResponseEntity.status(HttpStatus.OK)
			.body(CommonResponse.<CustomerRegistrationDto>builder().data(login).isError(false).message(LOGIN_MESSAGE).build());
   }
//============================================Sending Email======================================================================
    @PostMapping("/send-email")
    public void sendEmail(@RequestBody EmailRequestDto request) {
    	vehicleService.sendSimpleMessage(request.getTo(), 
    			request.getSubject(), 
    			request.getText()
    			);
    }

}



