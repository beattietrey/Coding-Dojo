package com.trey.relationships.controllers;

import java.time.LocalDate;
import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.trey.relationships.models.License;
import com.trey.relationships.models.Person;
import com.trey.relationships.services.LicenseService;
import com.trey.relationships.services.PersonService;

@Controller
public class LicenseController {
	private final LicenseService licenseServ;
	private final PersonService personServ;
	
	public LicenseController(LicenseService licenseServ, PersonService personServ) {
		this.licenseServ = licenseServ;
		this.personServ = personServ;
	}
	
	
	
	@RequestMapping("/")
	public String redirect( ) {
		return "redirect:/persons/new";
	}

	@RequestMapping("/persons/new")
	public String newPerson(Model model, @ModelAttribute("person") Person person) {
		return "index.jsp";
	}
	
	@RequestMapping("/licenses/new") 
	public String licenses(Model model, @ModelAttribute("license") License license) {
		List<Person> people = personServ.allPeople();
		model.addAttribute("people", people);
		return "newLicense.jsp";
	}
	
	
	@RequestMapping(value="/persons/new", method=RequestMethod.POST) 
	public String createPerson(@Valid @ModelAttribute("person")Person person, BindingResult result, Model model) {
		 if (result.hasErrors()) {
				List<Person> people = personServ.allPeople();
				model.addAttribute("people", people);
	            return "index.jsp";
	        } else {
	            personServ.createPerson(person);
	            return "redirect:/licenses/new";
	        }
	}
	
	@RequestMapping(value="/licenses/new", method=RequestMethod.POST)
	public String createLicense(@Valid @ModelAttribute("license") License license, BindingResult result, Model model, Person person, String state, LocalDate expirationDate) {
		if(result.hasErrors()) {
			List<Person> people = personServ.allPeople();
			model.addAttribute("people", people);
			return "newLicense.jsp";
		} else {
//            license.setPerson(person);
//            license.setState(state);
            license.setId(person.getId());
            license.setExpirationDate(expirationDate);
			licenseServ.createLicense(license);
			return "redirect:/persons/" + person.getId();
		}
	}
	
	@RequestMapping("/persons/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Person person = personServ.findPerson(id);
		License license = licenseServ.findLicense(id);
		if(person != null && license != null) {
			model.addAttribute("person", person);
			model.addAttribute("license", license);
			model.addAttribute("date", license.getExpirationDate().toString());
			return "show.jsp";
		} else {
			return "redirect:/persons/new";
		}
	}
}
