package com.excel.entity;

import java.time.LocalDate;

import com.excel.enums.Designation;

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
public class Experience {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer experienceId;
	private String companyName;
	private Integer yearOfExperience;
	private LocalDate dateOfJoining;
	private LocalDate dataOfRelieving;
	
	@Enumerated(EnumType.STRING)
	private Designation designation;
	
	private String location;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private EmployeePrimaryInfo employeePrimaryInfo;



}
