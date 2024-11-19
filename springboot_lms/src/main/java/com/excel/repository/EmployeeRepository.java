package com.excel.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.entity.EmployeePrimaryInfo;

public interface EmployeeRepository extends JpaRepository<EmployeePrimaryInfo, Integer>{

	Optional<EmployeePrimaryInfo>  findByEmployeeId(String employeeId);
}
