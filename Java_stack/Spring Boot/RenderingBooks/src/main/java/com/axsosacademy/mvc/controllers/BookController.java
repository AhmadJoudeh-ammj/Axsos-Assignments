package com.axsosacademy.mvc.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.axsosacademy.mvc.models.Book;
import com.axsosacademy.mvc.services.BookService;

@Controller
public class BookController {
    @Autowired
    private BookService bookService;
    
    @GetMapping("/")
    public String index(Model model) {
        List<Book> books = bookService.allBooks();
        model.addAttribute("books", books);
        return "index";
    }
    
    // Fixed: Changed to return view name instead of ResponseEntity for MVC pattern
    @GetMapping("/show/{id}")
    public String getBookById(@PathVariable Long id, Model model) {
        Book book = bookService.findById(id);
        
        if (book != null) {
            model.addAttribute("book", book);
            return "show"; // Return view name
        } else {
            return "redirect:/"; // Redirect if book not found
        }
    }
    
    
    // Fixed: Make parameters optional or add validation
    @PostMapping("/books")
    public String addBook(
            @RequestParam(value = "title", required = false) String title, 
            @RequestParam(value = "description", required = false) String description, 
            @RequestParam(value = "language", required = false) String language,
            @RequestParam(value = "numberofpages", required = false) Integer numberofpages) {
        
        
        
       Book book = bookService.createBook(new Book(title, description, language, numberofpages));
       
        return "redirect:/show/"+ book.getId();
    }
    
}