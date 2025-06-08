package axsos.spring.ninjagold;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpSession;

@Controller
public class NinjaGoldController {

    @GetMapping("/ninjaGold")
    public String index(HttpSession session) {
        if (session.getAttribute("gold") == null) {
            session.setAttribute("gold", 0);
            session.setAttribute("log", new ArrayList<String>());
        }
        return "ninjaGold";
    }

    @PostMapping("/ninjaGold/process")
    public String process(
        @RequestParam String place,
        HttpSession session,
        RedirectAttributes redirectAttributes
    ) {
        int gold = (int) session.getAttribute("gold");
        @SuppressWarnings("unchecked")
		List<String> log = (List<String>) session.getAttribute("log");

        int earned = 0;
        String message = "";
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        switch (place) {
            case "farm":
                earned = new Random().nextInt(11) + 10; // 10–20
                message = "You entered a farm and earned " + earned + " gold. (" + timestamp + ")";
                break;
            case "cave":
                earned = new Random().nextInt(6) + 5; // 5–10
                message = "You entered a cave and earned " + earned + " gold. (" + timestamp + ")";
                break;
            case "house":
                earned = new Random().nextInt(4) + 2; // 2–5
                message = "You entered a house and earned " + earned + " gold. (" + timestamp + ")";
                break;
            case "quest":
                earned = new Random().nextInt(101) - 50; // -50 to 50
                message = "You went on a quest and " + (earned >= 0 ? "earned" : "lost") + " " + Math.abs(earned) + " gold. (" + timestamp + ")";
                break;
            case "spa": // Ninja Bonus 1
                earned = -1 * (new Random().nextInt(16) + 5); // -5 to -20
                message = "You relaxed at a spa and lost " + Math.abs(earned) + " gold. (" + timestamp + ")";
                break;
            case "reset": // Ninja Bonus 2
                session.invalidate();
                return "redirect:/ninjaGold";
        }

        gold += earned;
        log.add(0, message);
        session.setAttribute("gold", gold);
        session.setAttribute("log", log);

        // Ninja Bonus 3: Debtors' Prison
        if (gold < -100) {
            return "redirect:/debt";
        }

        return "redirect:/ninjaGold";
    }

    @GetMapping("/debt")
    public String debtPage() {
        return "debt";
    }
}