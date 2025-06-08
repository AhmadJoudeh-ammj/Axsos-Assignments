package com.example.studentapp;

import com.example.studentapp.model.Student;
import com.example.studentapp.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class StudentAppApplication {
    public static void main(String[] args) {
        SpringApplication.run(StudentAppApplication.class, args);
    }

    // Add some students to the database when the app starts
    @Bean
    CommandLineRunner run(StudentRepository repo) {
        return args -> {
            repo.save(new Student(null, "Alice", 20));
            repo.save(new Student(null, "Bob", 22));
            repo.save(new Student(null, "Charlie", 19));
        };
    }
}