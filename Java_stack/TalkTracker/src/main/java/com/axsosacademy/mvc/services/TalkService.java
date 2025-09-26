package com.axsosacademy.mvc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.axsosacademy.mvc.models.Talk;
import com.axsosacademy.mvc.models.User;
import com.axsosacademy.mvc.repositories.TalkRepository;

@Service
public class TalkService {
    
    @Autowired
    private TalkRepository talkRepo;
    
    public Talk create(Talk newTalk, BindingResult result) {
        if(result.hasErrors()) {
            return null;
        }
        return talkRepo.save(newTalk);
    }
    
    public Talk createTalk(Talk talk) {
        return talkRepo.save(talk);
    }

    public Talk findTalkById(Long id) {
        Optional<Talk> optionalTalk = talkRepo.findById(id);
        return optionalTalk.orElse(null);
    }

    public void deleteTalkById(Long id) {
        talkRepo.deleteById(id);
    }

    public List<Talk> allTalks() {
        return talkRepo.findAll();
    }

    // ✅ New method to toggle attendance
    public void toggleAttendance(Talk talk, User user) {
        if (talk.getAttendees().contains(user)) {
            talk.getAttendees().remove(user); // user stops attending
        } else {
            talk.getAttendees().add(user); // user starts attending
        }
        talkRepo.save(talk); // persist the change
    }
}
