package com.elearning.E_Learning.Platform.controller;

import com.elearning.E_Learning.Platform.dto.AuthRequest;
import com.elearning.E_Learning.Platform.dto.AuthResponse;
import com.elearning.E_Learning.Platform.dto.RegisterRequest;
import com.elearning.E_Learning.Platform.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
}