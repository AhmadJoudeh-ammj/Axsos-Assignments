package com.axsosacademy.mvc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axsosacademy.mvc.models.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}