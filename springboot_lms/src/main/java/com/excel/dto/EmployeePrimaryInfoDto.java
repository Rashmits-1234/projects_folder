package com.excel.dto;

import java.time.LocalDate;

import com.excel.enums.Designation;
import com.excel.enums.EmployeeStatus;
import com.excel.enums.Gender;

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
public class EmployeePrimaryInfoDto {

	private String employeeId;
	private String employeeName;
	private LocalDate dateOfJoining;
	private LocalDate dateOfBirth;
	private String email;
	private String bloodGroup;
	private Designation designation;
	private Gender gender;
	private String nationality;
	private EmployeeStatus employeeStatus;
}
