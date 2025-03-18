package com.elearning.E_Learning.Platform.repository;

import java.util.List;
import com.elearning.E_Learning.Platform.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByInstructorId(Long instructorId);
    List<Course> findByCategoryId(Long categoryId);
} 