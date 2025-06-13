package com.axsosacademy.mvc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.axsosacademy.mvc.models.Burger;
import com.axsosacademy.mvc.services.BurgerService;

import jakarta.validation.Valid;

@Controller
public class BurgerController {

    @Autowired
    private BurgerService burgerService;

    @GetMapping("/")
    public String index(@ModelAttribute Burger burger, Model model) {
        model.addAttribute("burgers", burgerService.allBurgers());
        return "index";
    }

    @PostMapping("/burgers")
    public String createBurger(@Valid @ModelAttribute Burger burger, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("burgers", burgerService.allBurgers());
            return "index";
        }
        burgerService.createBurger(burger);
        return "redirect:/";
    }
}
