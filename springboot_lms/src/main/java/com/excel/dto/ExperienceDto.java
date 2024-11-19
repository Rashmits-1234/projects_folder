package com.excel.dto;

import java.time.LocalDate;

import com.excel.enums.Designation;

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
public class ExperienceDto {

	private String companyName;
	private Integer yearOfExperience;
	private LocalDate dateOfJoining;
	private LocalDate dataOfRelieving;
	private Designation designation;
	private String location;
}
