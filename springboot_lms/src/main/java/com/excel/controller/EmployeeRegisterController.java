package com.excel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.excel.dto.BankDetailsDto;
import com.excel.dto.EmployeePrimaryInfoDto;
import com.excel.dto.EmployeeSecondaryInfoDto;
import com.excel.dto.ListOfAddressDetailsDto;
import com.excel.dto.ListOfContactDto;
import com.excel.dto.ListOfEducationDetailsDto;
import com.excel.dto.ListOfExperienceDto;
import com.excel.dto.ListOfTechnicalSkillsDto;
import com.excel.entity.BankDetails;
import com.excel.entity.EmployeeSecondaryInfo;
import com.excel.response.SuccessResponse;
import com.excel.services.EmployeeRegisterService;

@RestController
@RequestMapping(path = "/api/v1/employee")
public class EmployeeRegisterController {
	
	@Autowired
	private EmployeeRegisterService employeeRegisterService;
	
	@PostMapping(path = "/pinfo")
	public ResponseEntity<SuccessResponse<Integer>> postPrimaryInfo(@RequestBody EmployeePrimaryInfoDto dto){
		Integer employeeId = employeeRegisterService.savePrimaryInfo(dto);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(SuccessResponse.<Integer>builder().data(employeeId).message("Employee Info Saved").build());
	}
	
	@PostMapping(path = "/sinfo")
	public ResponseEntity<SuccessResponse<String>> postSecondaryInfo(@RequestBody EmployeeSecondaryInfoDto dto){
		String employeeId = employeeRegisterService.saveSecondaryInfo(dto);
		return  ResponseEntity.status(HttpStatus.CREATED).body(
				SuccessResponse.<String>builder().data(employeeId).message("Employee Info Updated").build());
				
	}
	
	@PostMapping(path = "/binfo")
	public ResponseEntity<SuccessResponse<String>> bankDetails(@RequestBody BankDetailsDto dto){
		String employeeId = employeeRegisterService.saveBankDetails(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(SuccessResponse.<String>builder()
				.data(employeeId).message("Bank details added Successfully").build());
	}
	
	@PostMapping("/einfo")
	public ResponseEntity<SuccessResponse<String>> educationDetails(@RequestBody ListOfEducationDetailsDto dto){
		String employeeId = employeeRegisterService.saveEducationDetails(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(SuccessResponse.<String>builder()
				.data(employeeId).message("education details added Successfully").build());
		
	}
	
	@PostMapping("/ainfo")
	public ResponseEntity<SuccessResponse<String>> addressDetails(@RequestBody ListOfAddressDetailsDto dto){
		String employeeId = employeeRegisterService.saveAddressDetails(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(SuccessResponse.<String>builder()
				.data(employeeId).message("address details added Successfully").build());
		
	}
	
	@PostMapping("/exinfo")
	public ResponseEntity<SuccessResponse<String>> experience(@RequestBody ListOfExperienceDto dto){
		String employeeId = employeeRegisterService.saveExperience(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(SuccessResponse.<String>builder()
				.data(employeeId).message("experience details added Successfully").build());
		
	}
	
	@PostMapping("/cinfo")
	public ResponseEntity<SuccessResponse<String>> contact(@RequestBody ListOfContactDto dto){
		String employeeId = employeeRegisterService.saveContact(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(SuccessResponse.<String>builder()
				.data(employeeId).message("contact details added Successfully").build());
		
	}
	
	@PostMapping("/tsinfo")
	public ResponseEntity<SuccessResponse<String>> technicalSkills(@RequestBody ListOfTechnicalSkillsDto dto){
		String employeeId = employeeRegisterService.saveTechnicalSkills(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(SuccessResponse.<String>builder()
				.data(employeeId).message("technical skills added Successfully").build());
		
	}
}
