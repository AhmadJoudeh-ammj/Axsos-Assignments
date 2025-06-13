package com.axsosacademy.mvc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.axsosacademy.mvc.repositories.CategoryRepository;
import com.axsosacademy.mvc.repositories.ProductRepository;

@Controller
public class HomeController {
    @Autowired ProductRepository productRepo;
    @Autowired CategoryRepository categoryRepo;

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("products", productRepo.findAll());
        model.addAttribute("categories", categoryRepo.findAll());
        return "home";
    }
}