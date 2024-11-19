package com.excel.dto;

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
public class TechnicalSkillsDto {

	private String skillType;
	private Integer yearOfExperience;
	private String skillRatings;
}
