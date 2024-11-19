package com.excel.entity;

import com.excel.enums.AddressType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class AddressDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer addressId;
	
	@Enumerated(EnumType.STRING)
	private AddressType addressType;
	
	private Integer doorNo;
	private String street;
	private String locality;
	private String city;
	private String state;
	private Long pinCode;
	private String landMark;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private EmployeePrimaryInfo employeePrimaryInfo;
	
}
