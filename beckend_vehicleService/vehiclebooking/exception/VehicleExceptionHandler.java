package com.excel.vehiclebooking.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.excel.vehiclebooking.response.CommonResponse;

@RestControllerAdvice
public class VehicleExceptionHandler {

	@ExceptionHandler(ServiceNotFoundException.class)
	public ResponseEntity<CommonResponse<String>> serviceNotFoundException(RuntimeException exception) {
		return ResponseEntity
				.ok(CommonResponse.<String>builder().isError(true).message(exception.getMessage()).build());
	}

	@ExceptionHandler(CustomerException.class)
	public ResponseEntity<CommonResponse<String>> customerException(RuntimeException exception) {
		return ResponseEntity
				.ok(CommonResponse.<String>builder().isError(true).message(exception.getMessage()).build());
	}

	@ExceptionHandler(LoginFailedException.class)
	public ResponseEntity<CommonResponse<String>> loginFailedException(RuntimeException exception) {
		return ResponseEntity
				.ok(CommonResponse.<String>builder().isError(true).message(exception.getMessage()).build());
	}

}
