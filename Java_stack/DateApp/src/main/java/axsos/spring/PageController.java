package axsos.spring;  // Use your actual package here

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller  // This tells Spring this class handles web requests
public class PageController {

    // Handles GET requests to "/"
    @GetMapping("/")
    public String dashboard() {
        return "dashboard";  // returns dashboard.html from templates/
    }

    // Handles GET requests to "/date"
    @GetMapping("/date")
    public String datePage(Model model) {
        String date = new SimpleDateFormat("EEEE, MMMM d, yyyy").format(new Date());
        model.addAttribute("formattedDate", date);  // sends date to HTML
        return "date";  // returns date.html from templates/
    }

    // Handles GET requests to "/time"
    @GetMapping("/time")
    public String timePage(Model model) {
        String time = new SimpleDateFormat("hh:mm:ss a z").format(new Date());
        model.addAttribute("formattedTime", time);  // sends time to HTML
        return "time";  // returns time.html from templates/
    }
}