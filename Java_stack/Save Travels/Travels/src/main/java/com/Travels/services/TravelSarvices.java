package com.Travels.services;




import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Travels.models.Travel;
import com.Travels.repositories.TravelRepo;

import java.util.List;

@Service
public class TravelSarvices {


	@Autowired
	TravelRepo Repo;
    
    
    // returns all the books
    
    public List<Travel> allExpense() {
        return Repo.findAll();
    }
    // creates a book
    public Travel createExpense(Travel travel) {
        return Repo.save(travel);
    }
    // retrieves a book
    public Travel findExpenser(Long id) {
        Optional<Travel> optionalTravel = Repo.findById(id);
        if(optionalTravel.isPresent()) {
            return optionalTravel.get();
        } else {
            return null;
        }
    }
//	public Burger updateBurger(Long id,String burgerName, String resturantName, Integer rating, String notes) {
//		// TODO Auto-generated method stub
//		Optional<Burger> optionalBurger = burgerRepo.findById(id);
//        if(optionalBurger.isPresent()) {
//        	Burger burger = new Burger( burgerName,  resturantName,  rating,  notes);
//        	burger.setId(id);
//            return burgerRepo.save(burger);
//        }
//        {
//            return null;
//        }
//		
//	}
	public void deleteExpense(Long id) {
		// TODO Auto-generated method stub
		Optional<Travel> optionalTravel = Repo.findById(id);
        if(optionalTravel.isPresent()) {
        	Repo.deleteById(id);
             }
        
		
	}
	 public Travel updateExpense(Travel burger) {
	        return Repo.save(burger);
	    }
}