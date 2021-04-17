package com.codingdojo.trey.updatedelete.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.trey.updatedelete.models.Book;
import com.codingdojo.trey.updatedelete.repositories.BookRepository;

@Service
public class BookService {
	private final BookRepository bookRepository;
	
	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}
	
	// returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
    

    public Book updateBook(Book book) {
    	Optional<Book> updated = bookRepository.findById(book.getId());
    	if(updated.isPresent()) {
    		Book updatebook = updated.get();
    		updatebook.setTitle(book.getTitle());
    		updatebook.setDescription(book.getDescription());
    		updatebook.setLanguage(book.getLanguage());
    		updatebook.setNumberOfPages(book.getNumberOfPages());
    		return bookRepository.save(book);
    	} else {
    		System.out.println("This didn't work");
    		return null;
    	}
    }
    
    public void deleteBook(Long id) {
    	Optional<Book> updated = bookRepository.findById(id);
    	if(updated.isPresent()) {
    		bookRepository.deleteById(id);
    	}
    }
}
