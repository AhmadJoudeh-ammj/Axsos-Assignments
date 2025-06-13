package com.axsosacademy.mvc.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.axsosacademy.mvc.models.Product;
import com.axsosacademy.mvc.models.Category;
import com.axsosacademy.mvc.service.ProductService;

import jakarta.servlet.http.HttpSession;

import com.axsosacademy.mvc.repositories.CategoryRepository;
import com.axsosacademy.mvc.repositories.ProductRepository;
@Controller
@RequestMapping("/products")
public class ProductController {
    @Autowired ProductRepository productRepo;
    @Autowired CategoryRepository categoryRepo;

    @GetMapping("/new")
    public String newProductForm(Model model) {
        model.addAttribute("product", new Product());
        return "productForm";
    }

    @PostMapping
    public String createProduct(@ModelAttribute Product product) {
        productRepo.save(product);
        return "redirect:/";
    }

    @GetMapping("/{id}")
    public String showProduct(@PathVariable Long id, Model model) {
        Product product = productRepo.findById(id).orElse(null);
        model.addAttribute("product", product);
        model.addAttribute("allCategories", categoryRepo.findAll());
        return "productShow";
    }

    @PostMapping("/{id}/addCategory")
    public String addCategoryToProduct(@PathVariable Long id, @RequestParam Long categoryId) {
        Product product = productRepo.findById(id).orElse(null);
        Category category = categoryRepo.findById(categoryId).orElse(null);
        if (product != null && category != null && !product.getCategories().contains(category)) {
            product.getCategories().add(category);
            productRepo.save(product);
        }
        return "redirect:/products/" + id;
    }
}
