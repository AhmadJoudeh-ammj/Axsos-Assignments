package axsos.spring.omikuji;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class OmikujiController {

    // Show the Omikuji form
    @GetMapping("/omikuji")
    public String showForm() {
        return "omikujiForm";
    }

    // Handle form submission and save to session
    @PostMapping("/omikuji/process")
    public String processForm(
            @RequestParam("number") int number,
            @RequestParam("city") String city,
            @RequestParam("person") String person,
            @RequestParam("hobby") String hobby,
            @RequestParam("thing") String thing,
            @RequestParam("comment") String comment,
            HttpSession session
    ) {
        session.setAttribute("number", number);
        session.setAttribute("city", city);
        session.setAttribute("person", person);
        session.setAttribute("hobby", hobby);
        session.setAttribute("thing", thing);
        session.setAttribute("comment", comment);
        return "redirect:/omikuji/show";
    }

    // Show the Omikuji result
    @GetMapping("/omikuji/show")
    public String showResult() {
        return "omikujiShow";
    }
}
