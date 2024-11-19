package com.excel.vehiclebooking.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Pattern;
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
@Table(name = "customer_registration")
public class CustomerRegistration {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer customerRegId;

	private String customerName;

	private String customerPassword;

	@Column(unique = true)
    private String customerEmail;
	
	@Pattern(regexp="\\d{10}", message="Phone number must be 10 digits")
    private String customerPhoneNumber;
	
	private String customerAddress;

	private String customerCity;
	
	private String vehicleNumber;

	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "customerRegister")
	private List<VehicleRegistration> vehicleRegister;

	@OneToMany( cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "customerRegister")
	private List<ServiceDetails> serviceDetails;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "customerRegister")
	private List<Booking> booking;
}
