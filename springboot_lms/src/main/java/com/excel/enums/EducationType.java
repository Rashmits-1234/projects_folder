package com.excel.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum EducationType {

	UNDERGRADUATION("UNDERGRADUATION"), POSTGRADUATION("POSTGRADUATION"), DEGREE("DEGREE"), PUC("PUC");

	private final String educationType;
}

