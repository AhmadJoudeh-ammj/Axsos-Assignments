package com.DojoNinjas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DojoNinjas.models.Dojo;
import com.DojoNinjas.models.Ninja;
import com.DojoNinjas.repositories.DojoRepositorie;

@Service
public class DojoService {
	    @Autowired
	    private DojoRepositorie dojoRepo;

	    public Dojo createDojo(Dojo dojd) {
	        return dojoRepo.save(dojd);
	    }
	    

	    public Dojo findDojo(Long id) {
	        return dojoRepo.findById(id).orElse(null);
	    }
	    public List<Dojo> findAllDojos() {
	        return dojoRepo.findAll();
	    }
	}

