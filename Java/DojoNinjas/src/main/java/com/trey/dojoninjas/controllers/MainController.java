package com.trey.dojoninjas.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.trey.dojoninjas.models.Dojo;
import com.trey.dojoninjas.models.Ninja;
import com.trey.dojoninjas.services.DojoService;
import com.trey.dojoninjas.services.NinjaService;


@Controller
public class MainController {

		@Autowired
		private DojoService dojoService;

		@Autowired
		private NinjaService ninjaService;
		
		@GetMapping("/")
		public String index() {
			return "index.jsp";
		}
		
		@GetMapping("/dojos")
		public String newDojo(@ModelAttribute Dojo dojo) {
			return "newDojo.jsp";
		}
		
		@GetMapping("/ninjas")
		public String newNinja(@ModelAttribute Ninja ninja, Model model) {
			model.addAttribute("dojos", dojoService.allDojos());
			return "newNinja.jsp";
		}
		
		@PostMapping("/dojos")
		public String createDojo(@Valid @ModelAttribute Dojo dojo, BindingResult result) {
			if(result.hasErrors()) {
				return "newDojo.jsp";
			} else {
				dojoService.createDojo(dojo);
				return "redirect:/";
			}
		}
		
		@PostMapping("/ninjas")
		public String createNinja(@Valid @ModelAttribute Ninja ninja, BindingResult result, Model model) {
			if(result.hasErrors()) {
				model.addAttribute("dojos", dojoService.allDojos());
				return "newNinja.jsp";
			} else {
				ninjaService.createNinja(ninja);
				return "redirect:/";
			}
		}
		
		@GetMapping("/show/{id}")
		public String show(@PathVariable("id") Long id, Model model) {
			Dojo dojo = dojoService.findDojo(id);
			if(dojo != null) {
				model.addAttribute("dojo", dojo);
				return "show.jsp";
			} else {
				return "redirect:/";
			}
		}
}
