package axsos.spring.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    // Visit / → increments by 1
    @GetMapping("/")
    public String home(HttpSession session) {
        incrementCounter(session, 1);
        return "home";
    }

    // Visit /counter → shows the count
    @GetMapping("/counter")
    public String counter(HttpSession session, Model model) {
        Integer count = (Integer) session.getAttribute("count");
        if (count == null) {
            count = 0;
        }
        model.addAttribute("count", count);
        return "counter";
    }

    // Visit /increment-by-two → increments by 2
    @GetMapping("/increment-by-two")
    public String incrementByTwo(HttpSession session) {
        incrementCounter(session, 2);
        return "home";
    }

    // Visit /reset → resets to 0
    @GetMapping("/reset")
    public String resetCounter(HttpSession session) {
        session.setAttribute("count", 0);
        return "redirect:/counter";
    }

    // Reusable method to increment
    private void incrementCounter(HttpSession session, int amount) {
        Integer count = (Integer) session.getAttribute("count");
        if (count == null) {
            count = 0;
        }
        session.setAttribute("count", count + amount);
    }
}