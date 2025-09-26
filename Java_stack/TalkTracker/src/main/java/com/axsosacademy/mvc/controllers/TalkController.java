package com.axsosacademy.mvc.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.axsosacademy.mvc.models.Talk;
import com.axsosacademy.mvc.models.User;
import com.axsosacademy.mvc.services.TalkService;
import com.axsosacademy.mvc.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class TalkController {

    @Autowired
    private TalkService talkService;

    @Autowired
    private UserService userService;

    // Show form to add a new talk
    @GetMapping("/addtalk")
    public String showAddForm(Model model, HttpSession session) {
        if (session.getAttribute("userId") == null) {
            return "redirect:/index"; // redirect to login if not logged in
        }
        model.addAttribute("talk", new Talk());
        return "add"; // add.jsp
    }

    // Handle form submission
    @PostMapping("/talk")
    public String createTalk(@Valid @ModelAttribute("talk") Talk talk,
                             BindingResult result,
                             HttpSession session) {
        if (result.hasErrors()) return "add";

        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) return "redirect:/index";

        User user = userService.findUserById(userId);

        // 🔹 THIS IS CRUCIAL
        talk.setSpeaker(user);

        talkService.createTalk(talk);
        return "redirect:/home";
    }

    // Show single talk details
    @GetMapping("/talk/{id}")
    public String showTalk(@PathVariable("id") Long id, HttpSession session, Model model) {
        Talk talk = talkService.findTalkById(id);
        if (talk == null) {
            return "redirect:/home"; // talk not found
        }

        model.addAttribute("talk", talk);

        // Add logged-in user to the model for JSP checks
        Long userId = (Long) session.getAttribute("userId");
        if (userId != null) {
            User user = userService.findUserById(userId);
            model.addAttribute("user", user);
        }

        return "talk"; // talk.jsp
    }
   
    
       
    @PostMapping("/talk/{id}/delete")
    public String deleteTalk(@PathVariable("id") Long id, HttpSession session) {

        // 1️⃣ Check if user is logged in
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/index";
        }

        // 2️⃣ Find the talk by ID
        Talk talk = talkService.findTalkById(id);
        if (talk == null) {
            return "redirect:/home"; // talk not found
        }

        // 3️⃣ Check if the logged-in user is the speaker
        if (!talk.getSpeaker().getId().equals(userId)) {
            return "redirect:/home"; // not allowed to delete
        }

        // 4️⃣ Delete the talk
        talkService.deleteTalkById(id);

        return "redirect:/home";
    }
    
    @GetMapping("/talk/{id}/edit")
    public String showEditForm(@PathVariable("id") Long id, Model model, HttpSession session) {
        // check if user is logged in
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/index";
        }

        Talk talk = talkService.findTalkById(id);
        if (talk == null) {
            return "redirect:/home"; // talk not found
        }

        // only allow owner to edit
        if (!talk.getSpeaker().getId().equals(userId)) {
            return "redirect:/home"; // not the owner
        }

        model.addAttribute("talk", talk);
        return "edit"; // edit.jsp
    }
    
    
    
    @PostMapping("/talk/{id}/edit")
    public String updateTalk(
            @PathVariable("id") Long id,
            @Valid @ModelAttribute("talk") Talk talk,
            BindingResult result,
            HttpSession session) {

        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            return "redirect:/index";
        }

        Talk existingTalk = talkService.findTalkById(id);
        if (existingTalk == null || !existingTalk.getSpeaker().getId().equals(userId)) {
            return "redirect:/home"; // not found or not owner
        }

        if (result.hasErrors()) {
            return "edit";
        }

        // update fields
        existingTalk.setTitle(talk.getTitle());
        existingTalk.setDate(talk.getDate());
        existingTalk.setDetails(talk.getDetails());

        talkService.createTalk(existingTalk); // save updated talk

        return "redirect:/home";
    }
    
   
    
    @PostMapping("/talk/{id}/attend")
    @ResponseBody
    public Map<String, Boolean> toggleAttendAjax(@PathVariable Long id, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        Map<String, Boolean> response = new HashMap<>();
        response.put("attending", false);

        if (userId == null) {
            return response; // user not logged in
        }

        Talk talk = talkService.findTalkById(id);
        if (talk == null) {
            return response; // talk not found
        }

        User user = userService.findUserById(userId);

        if (talk.getSpeaker().getId().equals(userId)) {
            // Speaker cannot attend their own talk
            return response;
        }

        if (talk.getAttendees().contains(user)) {
            talk.getAttendees().remove(user);
        } else {
            talk.getAttendees().add(user);
        }

        talkService.createTalk(talk);

        response.put("attending", talk.getAttendees().contains(user));
        return response;
    }
    
}
