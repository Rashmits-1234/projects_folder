package com.excel.entity;

import java.time.LocalDate;
import java.util.List;

import com.excel.enums.Designation;
import com.excel.enums.EmployeeStatus;
import com.excel.enums.Gender;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
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
public class EmployeePrimaryInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer employeePrimaryId;
	private String employeeId;
	private String employeeName;
	private LocalDate dateOfJoining;
	private LocalDate dateOfBirth;
	private String email;
	private String bloodGroup;
	
	@Enumerated(EnumType.STRING)
	private Designation designation;
	
	@Enumerated(EnumType.STRING)
	private Gender gender;
	
	private String nationality;
	
	@Enumerated(EnumType.STRING)
	private EmployeeStatus employeeStatus;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "employeePrimaryInfo")
	private List<EducationDetails> educationdDetails;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "employeePrimaryInfo")
	private List<AddressDetails> addressDetails;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "employeePrimaryInfo")
	private List<Experience> experiences;
	
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "employeePrimaryInfo")
	private BankDetails bankDetails;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "employeePrimaryInfo")
	private List<Contact> contacts;
	
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "employeePrimaryInfo")
	private EmployeeSecondaryInfo employeeSecondaryInfo;
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "employeePrimaryInfo")
	private List<TechnicalSkills> technicalSkills;
	
}
