package com.elearning.E_Learning.Platform.service;

import com.elearning.E_Learning.Platform.dto.AuthRequest;
import com.elearning.E_Learning.Platform.dto.AuthResponse;
import com.elearning.E_Learning.Platform.dto.RegisterRequest;

public interface AuthService {
    AuthResponse login(AuthRequest authRequest);
    AuthResponse register(RegisterRequest registerRequest);
} 