package com.excel.dto;

import com.excel.enums.AccountType;

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
public class BankDetailsDto {

	private String employeeId;
	private Integer bankId;
	private Long accountNo;
	private AccountType accountType;
	private String branch;
	private String bankName;
	private String ifscCode;
	private String state;
}
