package com.axsosacademy.mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.axsosacademy.mvc.models.Calculator;

@Controller
public class CalculatorController {

    @GetMapping("/")
    public String showForm(Model model) {
        model.addAttribute("calculator", new Calculator());
        return "calculatorForm";
    }

    @PostMapping("/calculate")
    public String calculate(@ModelAttribute("calculator") Calculator calculator, Model model) {
        calculator.performOperation();
        model.addAttribute("result", calculator.getResult());
        return "result";
    }
}