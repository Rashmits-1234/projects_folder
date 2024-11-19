package com.excel.vehiclebooking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.excel.vehiclebooking.entity.MailConfig;

@SpringBootApplication
@Import(MailConfig.class)
public class VehiclebookingApplication {

	public static void main(String[] args) {
		SpringApplication.run(VehiclebookingApplication.class, args);
	}

}
