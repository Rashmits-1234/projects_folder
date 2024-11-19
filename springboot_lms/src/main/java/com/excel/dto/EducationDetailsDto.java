package com.excel.dto;

import com.excel.enums.EducationType;

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
public class EducationDetailsDto {

//	private Integer educationId;
	private EducationType educationType;
	private String yearOfPassing;
	private String universityName;
	private String percentage;
	private String instituteName;
	private String state;
	private String specialization;
}
