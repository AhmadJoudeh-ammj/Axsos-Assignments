package com.axsosacademy.mvc.services;

import com.axsosacademy.mvc.models.Burger;
import com.axsosacademy.mvc.repositories.BurgerRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class BurgerService {

    private final BurgerRepository burgerRepo;

    public BurgerService(BurgerRepository burgerRepo) {
        this.burgerRepo = burgerRepo;
    }

    public List<Burger> allBurgers() {
        return burgerRepo.findAll();
    }

    public Burger createBurger(Burger b) {
        return burgerRepo.save(b);
    }
 
    public Burger findById(Long id) {
        return burgerRepo.findById(id).orElse(null);
    }
    
    public Burger update(Burger burger , Long id) {
        Optional<Burger> optionalBurger = burgerRepo.findById(id);
            Burger existing = optionalBurger.get();
            existing.setBurgerName(burger.getBurgerName());
            existing.setRestaurantName(burger.getRestaurantName());
            existing.setRating(burger.getRating());
            existing.setNotes(burger.getNotes());
            return burgerRepo.save(existing);
        
    }


}
