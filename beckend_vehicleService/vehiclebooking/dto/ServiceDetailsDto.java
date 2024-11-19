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
public class ServiceDetailsDto {
	
	private Integer serviceId;
	private String serviceDescription;
	private String packageName;
	private String packageCost;
	private Integer vehicleRegId;
	private Integer customerRegId;
	
}
