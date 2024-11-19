package com.excel.entity;

import java.time.LocalDate;

import com.excel.enums.MaritalStatus;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
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
public class EmployeeSecondaryInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer employeeSecondaryId;
	private String panNo;
	private String aadharNo;
	private String fatherName;
	private String motherName;
	private String spouseName;
	private String passportNo;
	
	@Enumerated(EnumType.STRING)
	private MaritalStatus maritalStatus;
	
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private EmployeePrimaryInfo employeePrimaryInfo;
}
