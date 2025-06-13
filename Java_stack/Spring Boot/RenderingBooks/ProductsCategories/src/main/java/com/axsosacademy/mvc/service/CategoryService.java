package com.axsosacademy.mvc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.axsosacademy.mvc.models.Category;
import com.axsosacademy.mvc.repositories.CategoryRepository;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepo;

    public CategoryService(CategoryRepository categoryRepo) {
        this.categoryRepo = categoryRepo;
    }

    public List<Category> findAll() {
        return categoryRepo.findAll();
    }
}
