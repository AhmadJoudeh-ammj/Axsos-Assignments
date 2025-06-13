package com.axsosacademy.mvc.services;

import com.axsosacademy.mvc.models.Burger;
import com.axsosacademy.mvc.repositories.BurgerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
