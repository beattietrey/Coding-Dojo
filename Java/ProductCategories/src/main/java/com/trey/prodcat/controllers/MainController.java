package com.trey.prodcat.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.trey.prodcat.models.Category;
import com.trey.prodcat.models.Product;
import com.trey.prodcat.services.CategoryService;
import com.trey.prodcat.services.ProductService;

@Controller
public class MainController {
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private CategoryService categoryService;
	
	@GetMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@GetMapping("/products/new")
	public String newProduct(@ModelAttribute Product product) {
		return "newProduct.jsp";
	}
	
	@PostMapping("/products/new")
	public String createProduct(@Valid @ModelAttribute Product product, BindingResult result) {
		if(result.hasErrors()) {
		return "newProduct.jsp";
		} else {
			productService.createProduct(product);
			Long id = product.getId();
			return "redirect:/products/"+id;
		}
	}
	
	@GetMapping("/categories/new")
	public String newCategory(@ModelAttribute Category category) {
		return "newCategory.jsp";
	}
	
	@PostMapping("/categories/new")
	public String createCategory(@Valid @ModelAttribute Category category, BindingResult result) {
		if(result.hasErrors()) {
		return "newCategory.jsp";
		} else {
			categoryService.createCategory(category);
			Long id = category.getId();
			return "redirect:/categories/"+id;
		}
	}
	
	@GetMapping("/products/{id}")
	public String productShow(@PathVariable("id") Long id, Model model) {
		Product product = productService.findProduct(id);
		if(product != null) {
			model.addAttribute("categories", categoryService.allCategories());
			model.addAttribute("cateInProd", product.getCategories());
			model.addAttribute("product", product);
			return "productShow.jsp";
		} else {
			return "redirect:/products/new";
		}
	}
	
	@GetMapping("/categories/{id}")
	public String categoryShow(@PathVariable("id") Long id, Model model) {
		Category category = categoryService.findCategory(id);
		if(category != null) {
			model.addAttribute("products", productService.allProducts());
			model.addAttribute("prodInCate", category.getProducts());
			model.addAttribute("category", category);
			return "categoryShow.jsp";
		} else {
		return "redirect:/categories/new";
		}
	}
	
	@PostMapping("/categories/addProduct")
	public String addProduct(@RequestParam(value="new_product_id") Long prodId, @RequestParam(value="category_id") Long id) {
		Category category = categoryService.findCategory(id);
		category.getProducts().add(productService.findProduct(prodId));
		return "redirect:/categories"+category.getId();
	}
}
