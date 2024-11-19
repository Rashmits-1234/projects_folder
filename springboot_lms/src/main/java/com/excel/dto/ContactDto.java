package com.excel.dto;

import com.excel.enums.ContactType;

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
public class ContactDto {

	private ContactType contactType;
	private Long contactNo;
}
