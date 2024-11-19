package com.excel.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum MaritalStatus {
	MARRIED("MARRIED"), UNMARRIED("UNMARRIED"), DIVORCED("DIVORCED");

	private final String maritalStatus;
}
