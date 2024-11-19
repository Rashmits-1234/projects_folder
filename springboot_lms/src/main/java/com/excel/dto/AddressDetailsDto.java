package com.excel.dto;

import com.excel.enums.AddressType;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddressDetailsDto {

	private AddressType addressType;
	private Integer doorNo;
	private String street;
	private String locality;
	private String city;
	private String state;
	private Long pinCode;
	private String landMark;
}
