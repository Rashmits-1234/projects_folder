package com.excel.vehiclebooking.entity;

import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
@Table(name = "vehicle_registration")
public class VehicleRegistration {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer vehicleRegId;

	@Column(nullable = false)
	private String vehicleModel;

	@Column(nullable = false)
	private String vehicleNo;
	

	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "vehicleRegister")
	private List<ServiceDetails> serviceDetails;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private CustomerRegistration customerRegister;

}
