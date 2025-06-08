package com.example.studentapp.repository;

import com.example.studentapp.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    // No need to write anything! Spring Boot gives you methods like:
    // findAll(), save(), deleteById(), findById(), etc.
}