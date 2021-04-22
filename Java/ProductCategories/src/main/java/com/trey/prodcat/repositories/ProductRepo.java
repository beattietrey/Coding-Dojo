package com.trey.prodcat.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.trey.prodcat.models.Product;

@Repository
public interface ProductRepo  extends CrudRepository<Product, Long>{
	List<Product> findAll();
//	List<Product> findByNotIn(List<Product> productList);
}
