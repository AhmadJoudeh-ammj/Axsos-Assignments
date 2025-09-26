package com.axsosacademy.mvc.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.axsosacademy.mvc.models.User;
import com.axsosacademy.mvc.repositories.UserRepository;
import com.axsosacademy.mvc.models.Login;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public User register(User newUser, BindingResult result) {
        Optional<User> existingUser = userRepo.findByEmail(newUser.getEmail());

        if(existingUser.isPresent()) {
            result.rejectValue("email", "Unique", "This email is already registered!");
        }

        if(!newUser.getPassword().equals(newUser.getConfirmPassword())) {
            result.rejectValue("confirmPassword", "Matches", "Passwords must match!");
        }

        if(result.hasErrors()) {
            return null;
        }

        String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
        newUser.setPassword(hashed);
        return userRepo.save(newUser);
    }

    public User login(Login newLogin, BindingResult result) {
        Optional<User> potentialUser = userRepo.findByEmail(newLogin.getEmail());

        if(!potentialUser.isPresent()) {
            result.rejectValue("email", "NotFound", "Invalid credentials");
            return null;
        }

        User user = potentialUser.get();

        if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
            result.rejectValue("password", "Invalid", "Invalid credentials");
        }

        if(result.hasErrors()) {
            return null;
        }

        return user;
    }

    public User findUserById(Long id) {
        return userRepo.findById(id).orElse(null);
    }
    
    
}
