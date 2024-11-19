package com.excel.vehiclebooking.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
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
public class EmailRequestDto {
    
    @NotBlank(message = "Recipient email address is required")
    @Email(message = "Invalid email address format")
    private String to;

    @NotBlank(message = "Email subject is required")
    private String subject;

    @NotBlank(message = "Email text is required")
    private String text;
}