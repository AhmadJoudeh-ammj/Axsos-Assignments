package com.axsosacademy.mvc.controller;


import javax.script.ScriptException;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.axsosacademy.mvc.models.Calculator;

@Controller
public class CalculatorController {

    private final Calculator calculator = new Calculator();

    @GetMapping("/")
    public String showForm() {
        return "calculator";
    }

    @PostMapping("/calc")
    public String calculate(@RequestParam String expression, Model model) {
        try {
            double result = calculator.evaluateExpression(expression);
            model.addAttribute("result", result);
            model.addAttribute("expression", expression);
        } catch (ScriptException e) {
            model.addAttribute("error", "Invalid expression: " + expression);
        }
        return "calculator";
    }
}