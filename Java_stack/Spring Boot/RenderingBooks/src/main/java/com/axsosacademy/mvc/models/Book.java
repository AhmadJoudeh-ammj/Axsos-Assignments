package com.axsosacademy.mvc.models;
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String description;
    private String language;
    private Integer numberofpages;

    
    // Constructors
    public Book() {}
    
    public Book(String title, String description, String language, Integer numberofpages) {
        this.title = title;
        this.description = description;
        this.language = language;
        this.numberofpages = numberofpages;
    }
    
    
    // Getters & Setters
    public Long getId() { 
        return id; 
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getTitle() { 
        return title; 
    }
    
    public void setTitle(String title) { 
        this.title = title; 
    }
    
    public String getDescription() { 
        return description; 
    }
    
    public void setDescription(String description) { 
        this.description = description; 
    }
    
    public String getLanguage() {
        return language;
    }
    
    public void setLanguage(String language) {
        this.language = language;
    }
    
    // Fixed: Consistent naming for getter and setter
    public Integer getNumberofpages() {
        return numberofpages;
    }
    
    public void setNumberofpages(Integer numberofpages) {
        this.numberofpages = numberofpages;
    }
    
    
}