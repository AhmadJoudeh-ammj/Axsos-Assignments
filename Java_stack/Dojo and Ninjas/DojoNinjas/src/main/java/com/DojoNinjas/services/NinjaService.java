package com.DojoNinjas.services;




import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DojoNinjas.models.Ninja;
import com.DojoNinjas.repositories.NinjaRepositorie;

@Service
public class NinjaService {


    @Autowired
    private NinjaRepositorie  ninjaRepo;

    public List<Ninja> findAllNinjas() {
        return ninjaRepo.findAll();
    }

    public Ninja createNinja(Ninja ninja) {
        return ninjaRepo.save(ninja);
    }

    public Ninja findNinja(Long id) {
        return ninjaRepo.findById(id).orElse(null);
    }

	
//		public Person findById(Long id) {
//	        Optional<Person> optionalPerson = personRepository.findById(id);
//	        if(optionalPerson.isPresent()) {
//	            return optionalPerson.get();
//	        } else {
//	            return null;
//	        }
//	    }
	}