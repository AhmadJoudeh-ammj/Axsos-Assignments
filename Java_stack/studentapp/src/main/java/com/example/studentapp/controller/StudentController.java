package com.example.studentapp.controller;

import com.example.studentapp.model.Student;
import com.example.studentapp.repository.StudentRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StudentController {

    @Autowired
    private StudentRepository studentRepo;

    @GetMapping("/students")
    public String showStudents(Model model) {
        List<Student> students = new ArrayList<>();
        
        students.add(new Student(null, "Alice", 20));
        students.add(new Student(null, "Bob", 22));
        students.add(new Student(null, "Ahmad", 20));
        students.add(new Student(null, "Maria", 22));
        students.add(new Student(null, "Mustafa", 22));
        students.add(new Student(null, "Ali", 22));

        model.addAttribute("students", students);
        return "students";
    }

   

	public StudentRepository getStudentRepo() {
		return studentRepo;
	}

	public void setStudentRepo(StudentRepository studentRepo) {
		this.studentRepo = studentRepo;
	}
}