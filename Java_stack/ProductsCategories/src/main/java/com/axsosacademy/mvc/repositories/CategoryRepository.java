package com.axsosacademy.mvc.repositories;

import com.axsosacademy.mvc.models.Category;
import com.axsosacademy.mvc.service.CategoryService;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
	
} 
