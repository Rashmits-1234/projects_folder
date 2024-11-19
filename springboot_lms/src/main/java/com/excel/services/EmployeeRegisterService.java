package com.excel.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.dto.BankDetailsDto;
import com.excel.dto.EmployeePrimaryInfoDto;
import com.excel.dto.EmployeeSecondaryInfoDto;
import com.excel.dto.ListOfAddressDetailsDto;
import com.excel.dto.ListOfContactDto;
import com.excel.dto.ListOfEducationDetailsDto;
import com.excel.dto.ListOfExperienceDto;
import com.excel.dto.ListOfTechnicalSkillsDto;
import com.excel.entity.AddressDetails;
import com.excel.entity.BankDetails;
import com.excel.entity.Contact;
import com.excel.entity.EducationDetails;
import com.excel.entity.EmployeePrimaryInfo;
import com.excel.entity.EmployeeSecondaryInfo;
import com.excel.entity.Experience;
import com.excel.exception.EmployeeExistenceException;
import com.excel.repository.EmployeeRepository;
import com.excel.util.EmployeeUtil;

@Service
public class EmployeeRegisterService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	

	public Integer savePrimaryInfo(EmployeePrimaryInfoDto dto) {
		
		if(!employeeRepository.findByEmployeeId(dto.getEmployeeId()).isPresent()) {
			EmployeePrimaryInfo employee1 = EmployeeUtil.dtoToEntity(dto);
			EmployeePrimaryInfo save = employeeRepository.save(employee1);
			return save.getEmployeePrimaryId();
		}
	
		throw new  EmployeeExistenceException("Check EmployeeId entered");
	}



	public String saveSecondaryInfo(EmployeeSecondaryInfoDto dto) {
		
		Optional<EmployeePrimaryInfo> optional = employeeRepository.findByEmployeeId(dto.getEmployeeId());
		if(optional.isPresent()) {
			EmployeePrimaryInfo employeePrimaryInfo = optional.get();
			if(employeePrimaryInfo.getEmployeeSecondaryInfo()==null) {
				
				EmployeeSecondaryInfo employeeSecondaryInfo = EmployeeUtil.dtoToEntity(dto);
				employeePrimaryInfo.setEmployeeSecondaryInfo(employeeSecondaryInfo);
				employeeSecondaryInfo.setEmployeePrimaryInfo(employeePrimaryInfo);
				
				return employeeRepository.save(employeePrimaryInfo).getEmployeeId();
			}else {
				EmployeeSecondaryInfo employeeSecondaryInfo = employeePrimaryInfo.getEmployeeSecondaryInfo();
				employeeSecondaryInfo.setPanNo(dto.getPanNo());
				employeeSecondaryInfo.setAadharNo(dto.getAadharNo());
				employeeSecondaryInfo.setFatherName(dto.getFatherName());
				employeeSecondaryInfo.setMotherName(dto.getMotherName());
				employeeSecondaryInfo.setMaritalStatus(dto.getMaritalStatus());
				employeeSecondaryInfo.setPassportNo(dto.getPassportNo());
				employeeSecondaryInfo.setSpouseName(dto.getSpouseName());
			}
		}
		throw new EmployeeExistenceException("Employee Not Registered..Please Register First");
	
	}



	public String saveBankDetails(BankDetailsDto dto) {
		Optional<EmployeePrimaryInfo> optional = employeeRepository.findByEmployeeId(dto.getEmployeeId());
		if(optional.isPresent()) {
			EmployeePrimaryInfo employeePrimaryInfo = optional.get();
			if(employeePrimaryInfo.getBankDetails()==null) {
				BankDetails bankDetails = EmployeeUtil.dtoToEntity(dto);
				employeePrimaryInfo.setBankDetails(bankDetails);
				bankDetails.setEmployeePrimaryInfo(employeePrimaryInfo);
				
				return employeeRepository.save(employeePrimaryInfo).getEmployeeId();
			}else {
				BankDetails bankDetails = employeePrimaryInfo.getBankDetails();
				bankDetails.setAccountNo(dto.getAccountNo());
				bankDetails.setAccountType(dto.getAccountType());
				bankDetails.setBankName(dto.getBankName());
				bankDetails.setBranch(dto.getBranch());
				bankDetails.setIfscCode(dto.getIfscCode());
				bankDetails.setState(dto.getState());
				
				return employeeRepository.save(employeePrimaryInfo).getEmployeeId();
			}
			
		}
		throw new EmployeeExistenceException("Employee not registered!! Please register first");
	}



	public String saveEducationDetails(ListOfEducationDetailsDto dto) {

		Optional<EmployeePrimaryInfo> optional = employeeRepository.findByEmployeeId(dto.getEmployeeId());
		if(optional.isPresent()) {
			EmployeePrimaryInfo employeePrimaryInfo = optional.get();
			
			List<EducationDetails> educations = dto.getEducationDetails().stream()
					.map(edu -> EducationDetails.builder().yearOfPassing(edu.getYearOfPassing())
							.educationType(edu.getEducationType())
							.instituteName(edu.getInstituteName())
							.percentage(edu.getPercentage())
							.universityName(edu.getUniversityName())
							.state(edu.getState())
							.specialization(edu.getSpecialization())
							.build()).toList();
		
			employeePrimaryInfo.setEducationdDetails(new ArrayList<>(educations));
			educations.stream().forEach(edu -> edu.setEmployeePrimaryInfo(employeePrimaryInfo));
			return employeeRepository.save(employeePrimaryInfo).getEmployeeId();
		}
		throw new EmployeeExistenceException("Employee not registered!! Please register first");
		
	}



	public String saveAddressDetails(ListOfAddressDetailsDto dto) {
		
		Optional<EmployeePrimaryInfo> optional = employeeRepository.findByEmployeeId(dto.getEmployeeId());
		if(optional.isPresent()) {
			EmployeePrimaryInfo employeePrimaryInfo = optional.get();
			
			List<AddressDetails> addresses = dto.getAddressDtos().stream()
					.map(edu ->AddressDetails.builder().addressType(edu.getAddressType())
							.doorNo(edu.getDoorNo()).city(edu.getCity())
							.state(edu.getState()).street(edu.getStreet())
							.locality(edu.getLocality()).landMark(edu.getLandMark())
							.pinCode(edu.getPinCode())
							.build()).toList();
		
			employeePrimaryInfo.setAddressDetails(new ArrayList<>(addresses));
			addresses.stream().forEach(edu -> edu.setEmployeePrimaryInfo(employeePrimaryInfo));
			return employeeRepository.save(employeePrimaryInfo).getEmployeeId();
		}
		throw new EmployeeExistenceException("Employee not registered!! Please register first");
	}



	public String saveExperience(ListOfExperienceDto dto) {
		
		Optional<EmployeePrimaryInfo> optional = employeeRepository.findByEmployeeId(dto.getEmployeeId());
		if(optional.isPresent()) {
			EmployeePrimaryInfo employeePrimaryInfo = optional.get();
			
			List<Experience> experiences = dto.getExperiences().stream()
					.map(edu ->Experience.builder().companyName(edu.getCompanyName())
							.dateOfJoining(edu.getDateOfJoining())
							.designation(edu.getDesignation())
							.dataOfRelieving(edu.getDataOfRelieving())
							.yearOfExperience(edu.getYearOfExperience())
							.location(edu.getLocation())
							.build()).toList();
		
			employeePrimaryInfo.setExperiences(new ArrayList<>(experiences));
			experiences.stream().forEach(edu -> edu.setEmployeePrimaryInfo(employeePrimaryInfo));
			return employeeRepository.save(employeePrimaryInfo).getEmployeeId();
		}
		throw new EmployeeExistenceException("Employee not registered!! Please register first");
	}



	public String saveContact(ListOfContactDto dto) {
		
		Optional<EmployeePrimaryInfo> optional = employeeRepository.findByEmployeeId(dto.getEmployeeId());
		if(optional.isPresent()) {
			EmployeePrimaryInfo employeePrimaryInfo = optional.get();
			
			List<Contact> contacts = dto.getContacts().stream()
					.map(edu ->Contact.builder().contactType(edu.getContactType())
							.contactNo(edu.getContactNo())
							.build()).toList();
		
			employeePrimaryInfo.setContacts(new ArrayList<>(contacts));
			contacts.stream().forEach(edu -> edu.setEmployeePrimaryInfo(employeePrimaryInfo));
			return employeeRepository.save(employeePrimaryInfo).getEmployeeId();
		}
		throw new EmployeeExistenceException("Employee not registered!! Please register first");
	}



	@Override
	public String addTechSkillMethod(TechnicalSkillListDto dto) {
		Optional<EmployeePrimaryInfo> employee=employeeRepository.findByEmployeeId(dto.getEmployeeId());
		if(employee.isPresent()) {
			EmployeePrimaryInfo employeePrimaryInfo=employee.get();
			List<Technicalskills> skills=dto.getSkills().stream().map(skill->{
				Optional<EmployeeTechnicalskillsInfo> optional=skillRepository.findBySkillTypeAndSkillRatingAndYearofExperience
						(skill.getSkillType(),skill.getSkillRating(),skill.getYearofExperience());
				
				return optional.isPresent()?optional.get():ObjectUtils.dtoToTechSkillEntity(skill);
				}).collect(Collectors.toList());
			
			if(employeePrimaryInfo.getTechnicalskills()!=null) {
				employeePrimaryInfo.getTechnicalskills().clear();
			}
			
			skills.stream().forEach(x->{
				if(!x.getEmployeePrimaryInfos().contains(employeePrimaryInfo))
					x.getEmployeePrimaryInfos().add(employeePrimaryInfo);
			});
			
			employeePrimaryInfo.setEmployeeTechnicalskillsInfos(skills);
			employeeRepository.save(employeePrimaryInfo);
			return employeePrimaryInfo.getEmployeeId();
		}
		
		
		throw new EmployeeExistenceException("Employee Id not registered");
	}

