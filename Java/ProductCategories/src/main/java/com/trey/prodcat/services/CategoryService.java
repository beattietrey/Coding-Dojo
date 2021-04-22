package com.trey.prodcat.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trey.prodcat.models.Category;
import com.trey.prodcat.models.Product;
import com.trey.prodcat.repositories.CategoryRepo;
import com.trey.prodcat.repositories.ProductRepo;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepo categoryRepo;
	@Autowired
	private ProductRepo productRepo;
	
	
	public List<Category> allCategories() {
		return categoryRepo.findAll();
	}
	
	public Category createCategory(Category category) {
		return categoryRepo.save(category);
	}
	
	public Category findCategory(Long id) {
		if(categoryRepo.findById(id).isPresent()) {
			return categoryRepo.findById(id).get();
		} else {
			return null;
		}
	}
	
//	public List<Product> prodNotInCate(Category category) {
//		return productRepo.findByNotIn(category.getProducts());
//	}
}
