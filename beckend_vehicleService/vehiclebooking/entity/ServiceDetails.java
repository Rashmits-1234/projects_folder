package com.excel.vehiclebooking.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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
@Entity
@Table(name = "service_Details")
public class ServiceDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer serviceId;

	private String serviceDescription;

	private String packageName;

	private String packageCost;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private CustomerRegistration customerRegister;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private VehicleRegistration vehicleRegister;
}
