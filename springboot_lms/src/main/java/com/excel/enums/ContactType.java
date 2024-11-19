package com.excel.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum ContactType {
	
	PHONE("PHONE"), HOME("HOME");

	private final String contactType;
	
}
