package com.excel.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum Gender {

	MALE("MALE"), FEMALE("FEMALE"), OTHERS("OTHERS");
	
	private final String gender;
}
