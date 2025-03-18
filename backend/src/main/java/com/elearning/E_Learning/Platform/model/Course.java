package com.elearning.E_Learning.Platform.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Data
@Entity
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    private String description;
    
    @ManyToOne
    @JoinColumn(name = "instructor_id")
    private User instructor;
    
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<Section> sections;
    
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    
    private double price;
    
    @Column(nullable = false)
    private boolean published = false;
} 