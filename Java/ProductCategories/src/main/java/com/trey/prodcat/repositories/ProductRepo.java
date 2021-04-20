package com.trey.prodcat.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.trey.prodcat.models.Product;

public interface ProductRepo  extends CrudRepository<Product, Long>{
	List<Product> findAll();
}
