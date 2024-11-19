package com.excel.entity;

import com.excel.enums.EducationType;

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
public class EducationDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer educationId;
	
	@Enumerated(EnumType.STRING)
	private EducationType educationType;
	
	private String yearOfPassing;
	private String universityName;
	private String percentage;
	private String instituteName;
	private String state;
	private String specialization;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private EmployeePrimaryInfo employeePrimaryInfo;
}
