package com.Travels.controllers;


//import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
	import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.Travels.models.Travel;
import com.Travels.services.TravelSarvices;
import jakarta.validation.Valid;

	//import jakarta.validation.Valid;ta.validation.Valid;

	@Controller
	public class TravelController {	
		
		@Autowired
		TravelSarvices expense;
		
		 @GetMapping("/")
		 public String index(@ModelAttribute("Travel") Travel travel,Model model) {
			 model.addAttribute("travel",expense.allExpense());
			 return "index";
		 }
//		 @GetMapping("/home")
//		 public String index(Model model) {
//		     model.addAttribute("book", new Book());
//		     return "index";
//		 }
		 

		 @PostMapping("/form")
		 public String createExpense(@Valid @ModelAttribute("Travel") Travel travel,BindingResult result){
		     if (result.hasErrors()) {
		         return "index"; // return to form if validation fails
		     }
		     expense.createExpense(travel);
		     return "redirect:/"; 
		 }
		 
		 @GetMapping("/expense/edit/{id}")
		 public String desplay(Model model,@PathVariable Long id) {
			 Travel travel1 =expense.findExpenser(id);
			 model.addAttribute("Travel", travel1);
			 return "edit";
		 }
		 	@RequestMapping(value="/update/expense/{id}", method=RequestMethod.PUT)
		 public String update(
		     @Valid @ModelAttribute("Travel") Travel travel,
		     BindingResult result,
		     @PathVariable("id") Long id,
		     Model model) {
		     if (result.hasErrors()) {
		         return "edit"; // return to edit form if validation fails
		     }

		     // Ensure the burger keeps the original ID
//		     travel.setId(id);

		     // Update the burger
		     expense.createExpense(travel);

		     return "redirect:/"; 
		 }
		 
		 	@RequestMapping(value="/delete/{id}", method=RequestMethod.DELETE)
		    public String destroy(@PathVariable("id") Long id) {
		 		expense.deleteExpense(id);
		        return "redirect:/"; 
		        }
		 	
		 	@GetMapping("/expense/{id}")
			 public String displayExpense(@PathVariable("id") Long id,Model model) {
				 model.addAttribute("travel",expense.findExpenser(id));
				 return "new";
			 }
		 
//		 	
		    
//		   
	}
		 	

