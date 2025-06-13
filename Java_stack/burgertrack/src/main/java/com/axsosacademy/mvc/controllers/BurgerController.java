package com.axsosacademy.mvc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
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
    
    @GetMapping("/burgers/{id}/update")
    public String editBurger(@PathVariable Long id, Model model) {
        Burger burger = burgerService.findById(id);
        if (burger == null) {
            return "redirect:/"; // or show an error page
        }
        model.addAttribute("burger", burger);
        return "editBurger";
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
    
    @PostMapping("/burgers/{id}/update")
    public String updateBurger(@PathVariable String id , @Valid @ModelAttribute Burger burger, BindingResult result) {
    	
    	if (result.hasErrors()) {
            System.out.println("Validation failed");
            return "editBurger";
        }
        burgerService.update(burger ,Long.valueOf(id));
        return "redirect:/";
    }
}
