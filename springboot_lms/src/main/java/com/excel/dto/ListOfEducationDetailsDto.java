package com.excel.dto;

import java.util.List;

import com.excel.entity.EducationDetails;

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
public class ListOfEducationDetailsDto {

	private String employeeId;
	private List<EducationDetailsDto> educationDetails;
}
