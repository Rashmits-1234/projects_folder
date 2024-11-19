package com.excel.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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
public class TechnicalSkills {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer skillId;
	private String skillType;
	private Integer yearOfExperience;
	private String skillRatings;
	
	@JoinTable(name = "map_skill_employee", joinColumns = @JoinColumn(name = "skill_id"),inverseJoinColumns = @JoinColumn(name= "employee_id"))
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<EmployeePrimaryInfo>  employeePrimaryInfo;
}
