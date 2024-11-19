package com.excel.vehiclebooking.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CustomerRegistrationDto {
	
	private Integer customerRegId;
	private String customerName;
	private String customerPassword;
	private String customerEmail;
	private String customerPhoneNumber;
	private String customerAddress;
	private String customerCity;
	private String vehicleNumber;

}
