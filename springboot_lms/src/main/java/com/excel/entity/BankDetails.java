package com.excel.entity;

import com.excel.enums.AccountType;

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
public class BankDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer bankId;
	private Long accountNo;
	
	@Enumerated(EnumType.STRING)
	private AccountType accountType;
	
	private String branch;
	private String bankName;
	private String ifscCode;
	private String state;
	
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private EmployeePrimaryInfo employeePrimaryInfo;
}
