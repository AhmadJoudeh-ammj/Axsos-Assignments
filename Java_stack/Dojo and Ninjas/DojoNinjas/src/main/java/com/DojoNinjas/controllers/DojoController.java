package com.DojoNinjas.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import com.DojoNinjas.models.Dojo;
import com.DojoNinjas.services.DojoService;

import jakarta.validation.Valid;

@Controller

public class DojoController {
    @Autowired
    private DojoService dojoService;
    
    @GetMapping("/new/dojos")
    public String newDojo(@ModelAttribute ("dojos") Dojo dojo) {
    	return "dojo";
    }
    
    @PostMapping("/dojo/form")
    public String createDojo(@Valid @ModelAttribute ("dojos") Dojo dojo, BindingResult result) {
    	  if (result.hasErrors()) {
              return "dojo";
              }
		dojoService.createDojo(dojo);
          return "redirect:/new/ninjas";
    }
    @GetMapping("/display/{id}")
    public String dsplayDojo(@PathVariable("id") Long id ,Model model) {
    	model.addAttribute("dojo",dojoService.findDojo(id));
    	return "display"; 
    }
}
