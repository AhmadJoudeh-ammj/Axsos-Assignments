package com.axsosacademy.mvc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.axsosacademy.mvc.models.Login;
import com.axsosacademy.mvc.models.Talk;
import com.axsosacademy.mvc.models.User;
import com.axsosacademy.mvc.services.TalkService;
import com.axsosacademy.mvc.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class MainController {
	
	@Autowired
	private TalkService talkService; // 🔑 add this

	// Add once service is implemented:
	@Autowired
	private UserService userService;

	@GetMapping("/")
	public String index(Model model) {
		// Bind empty User and LoginUser objects to the JSP
		// to capture the form input
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new Login());
		return "index";
	}

	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model,
			HttpSession session) {
		User registeredUser = userService.register(newUser, result);

		if (result.hasErrors()) {
			model.addAttribute("newLogin", new Login());
			return "index";
		}

		session.setAttribute("userId", registeredUser.getId());
		return "redirect:/home";
	}

	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") Login newLogin, BindingResult result, Model model,
			HttpSession session) {
		User user = userService.login(newLogin, result);

		if (result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "index";
		}

		session.setAttribute("userId", user.getId());
		return "redirect:/home";
	}

	@GetMapping("/home")
	public String home(HttpSession session, Model model) {
	    if (session.getAttribute("userId") == null) {
	        return "redirect:/index";
	    }

	    Long userId = (Long) session.getAttribute("userId");
	    User user = userService.findUserById(userId);
	    model.addAttribute("user", user);

	    // ✅ Pass talks to JSP
	    List<Talk> talks = talkService.allTalks();
	    model.addAttribute("talks", talks);

	    return "home";
	}

	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate(); // Destroys the entire session
		return "redirect:/"; // Redirect to login/registration page
	}

}
	