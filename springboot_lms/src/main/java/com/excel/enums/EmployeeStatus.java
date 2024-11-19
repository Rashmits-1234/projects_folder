package com.excel.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum EmployeeStatus {

	ACTIVE("ACTIVE"), TERMINATED("TERMINATED"), ABSCONDED("ABSCONDED"), NOTIECEPERIOD("NOTIECEPERIOD");

	private final String employeeStatus;
}
