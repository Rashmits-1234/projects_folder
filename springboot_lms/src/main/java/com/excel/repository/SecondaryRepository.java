package com.excel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.entity.EmployeeSecondaryInfo;

public interface SecondaryRepository extends JpaRepository<EmployeeSecondaryInfo, Integer>{

}
