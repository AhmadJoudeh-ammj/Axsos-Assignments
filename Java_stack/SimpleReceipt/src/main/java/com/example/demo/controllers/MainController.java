package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String index(Model model) {
        // Add data to show on the page
        model.addAttribute("name", "Ada Lovelace");
        model.addAttribute("itemName", "Quantum transistor");
        model.addAttribute("price", 249.99);
        model.addAttribute("description", "Advanced computing unit.");
        model.addAttribute("vendor", "Futuristic Components Inc.");

        return "index.jsp";
    }
}