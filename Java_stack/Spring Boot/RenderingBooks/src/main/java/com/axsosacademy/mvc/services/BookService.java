package com.axsosacademy.mvc.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.axsosacademy.mvc.models.Book;
import com.axsosacademy.mvc.repositories.BookRepository;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> allBooks() {
        return bookRepository.findAll();
    }

    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    public Long countBooksByTitle(String title) {
        return bookRepository.countByTitleContaining(title);
    }

    public void deleteBooksByTitlePrefix(String titleStart) {
        bookRepository.deleteByTitleStartingWith(titleStart);
    }

    public List<Book> searchByDescription(String keyword) {
        return bookRepository.findByDescriptionContaining(keyword);
    }

    public Book findById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }
}
