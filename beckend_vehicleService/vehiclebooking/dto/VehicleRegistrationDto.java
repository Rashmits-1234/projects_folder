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
public class VehicleRegistrationDto {

	private Integer vehicleRegId;
	private String vehicleModel;
	private String vehicleNo;
	private Integer customerRegId;
	
}
