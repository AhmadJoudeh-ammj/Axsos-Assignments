package axsos.spring.controller;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import axsos.spring.model.Item;

@Controller
public class AppController {
	
	@GetMapping("/")
	public String index (Model model) {
		ArrayList<Item> fruits= new ArrayList<Item>();
		fruits.add(new Item("Kiwi", 1.5));
		fruits.add(new Item("Mango", 2.0));
		fruits.add(new Item("Berries", 4.0));
		fruits.add(new Item("Guava", 0.75));
		
		model.addAttribute("fruits", fruits);
		
		return"index";
		
		
	}


}
