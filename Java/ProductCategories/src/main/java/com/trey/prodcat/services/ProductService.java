package com.trey.prodcat.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trey.prodcat.models.Product;
import com.trey.prodcat.repositories.ProductRepo;

@Service
public class ProductService {

	@Autowired
	private ProductRepo productRepo;
	
	public List<Product> allProducts() {
		return productRepo.findAll();
	}
	
	public Product createProduct(Product product) {
		return productRepo.save(product);
	}
	
	public Product findProduct(Long id) {
		if(productRepo.findById(id).isPresent()) {
			return productRepo.findById(id).get();
		} else {
			return null;
		}
	}
	
}
