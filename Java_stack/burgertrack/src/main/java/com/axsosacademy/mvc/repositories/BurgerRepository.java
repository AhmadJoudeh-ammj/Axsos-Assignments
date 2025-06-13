package com.axsosacademy.mvc.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.axsosacademy.mvc.models.Burger;

public interface BurgerRepository extends CrudRepository<Burger, Long> {
    List<Burger> findAll();
}
