package com.excel.vehiclebooking.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ServiceDetailsListDto {
	
	private Integer vehicleRegId;
	private Integer customerRegId;
	private List<ServiceDetailsDto> serviceDetails;
}
