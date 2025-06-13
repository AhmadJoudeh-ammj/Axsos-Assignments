package com.axsosacademy.mvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axsosacademy.mvc.models.Product;
import com.axsosacademy.mvc.repositories.ProductRepository;

@Service
public class ProductService {

    private final ProductRepository productRepo;

    @Autowired
    public ProductService(ProductRepository productRepo) {
        this.productRepo = productRepo;
    }

    public List<Product> findAll() {
        return productRepo.findAll();
    }
}
