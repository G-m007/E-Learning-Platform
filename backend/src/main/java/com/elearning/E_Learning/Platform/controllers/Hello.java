package com.elearning.E_Learning.Platform.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Hello {
    @GetMapping("/hello")
    public String sayHello() {
        return "Welcome to E-learning Platform!";
    }
}