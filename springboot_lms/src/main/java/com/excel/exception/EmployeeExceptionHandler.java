package com.excel.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class EmployeeExceptionHandler {

	@ExceptionHandler(EmployeeExistenceException.class)
	public static ResponseEntity<String> exceptionHandler(RuntimeException exp){
		return ResponseEntity.status(HttpStatus.OK)
				.body(null);
	}
}
