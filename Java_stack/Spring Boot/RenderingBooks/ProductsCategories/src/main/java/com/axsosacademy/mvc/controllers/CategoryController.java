package com.axsosacademy.mvc.controllers;

import com.axsosacademy.mvc.models.Category;
import com.axsosacademy.mvc.models.Product;
import com.axsosacademy.mvc.repositories.CategoryRepository;
import com.axsosacademy.mvc.repositories.ProductRepository;
//import com.axsosacademy.mvc.models.Product;
//import com.axsosacademy.mvc.service.CategoryService;
//import com.axsosacademy.mvc.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

//import java.util.Optional;

@Controller
@RequestMapping("/categories")
public class CategoryController {
    @Autowired CategoryRepository categoryRepo;
    @Autowired ProductRepository productRepo;

    @GetMapping("/new")
    public String newCategoryForm(Model model) {
        model.addAttribute("category", new Category());
        return "categoryForm";
    }

    @PostMapping
    public String createCategory(@ModelAttribute Category category) {
        categoryRepo.save(category);
        return "redirect:/";
    }

    @GetMapping("/{id}")
    public String showCategory(@PathVariable Long id, Model model) {
        Category category = categoryRepo.findById(id).orElse(null);
        model.addAttribute("category", category);
        model.addAttribute("allProducts", productRepo.findAll());
        return "categoryShow";
    }

    @PostMapping("/{id}/addProduct")
    public String addProductToCategory(@PathVariable Long id, @RequestParam Long productId) {
        Category category = categoryRepo.findById(id).orElse(null);
        Product product = productRepo.findById(productId).orElse(null);
        if (category != null && product != null && !product.getCategories().contains(category)) {
            product.getCategories().add(category);
            productRepo.save(product);
        }
        return "redirect:/categories/" + id;
    }
}
