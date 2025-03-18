package com.elearning.E_Learning.Platform.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "sections")
public class Section {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    
    private String description;
    
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;
} 