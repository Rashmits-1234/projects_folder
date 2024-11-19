package com.excel.dto;

import java.util.List;

import com.excel.entity.Contact;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListOfContactDto {

	private String employeeId;
	private List<ContactDto> contacts;
}
