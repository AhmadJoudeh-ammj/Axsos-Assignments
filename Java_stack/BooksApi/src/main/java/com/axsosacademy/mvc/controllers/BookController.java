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

    @PostMapping("/books")
    public String addBook(@RequestParam("title") String title,
                          @RequestParam("description") String description) {
        bookService.createBook(new Book(title, description));
        return "redirect:/";
    }
}