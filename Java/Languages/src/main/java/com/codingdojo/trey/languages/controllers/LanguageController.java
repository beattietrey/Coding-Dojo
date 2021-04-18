package com.codingdojo.trey.languages.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingdojo.trey.languages.models.Language;
import com.codingdojo.trey.languages.services.LanguageService;

@Controller
public class LanguageController {
	private final LanguageService langServ;
	
	public LanguageController(LanguageService langServ) {
		this.langServ = langServ;
	}
	
	@RequestMapping("/")
	public String redirect() {
		return "redirect:/languages";
	}
	
	@RequestMapping("/languages")
	public String index(Model model, @ModelAttribute("language") Language language) {
		List<Language> langs = langServ.allLanguages();
		model.addAttribute("langs",langs);
 		return "index.jsp";
	}
	

    @RequestMapping(value="/languages", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("language") Language language, BindingResult result, Model model) {
        if (result.hasErrors()) {
    		List<Language> langs = langServ.allLanguages();
    		model.addAttribute("langs",langs);
            return "index.jsp";
        } else {
            langServ.createLanguage(language);
            return "redirect:/languages";
        }
    }
    
    @RequestMapping("/languages/{id}")
    public String getLang(@PathVariable Long id, Model model) {
    	Language language = langServ.findLanguage(id);
    	if(language != null) {
    		model.addAttribute("language", language);
    		return "show.jsp";
    	} else {
    		return "redirect:/languages";
    	}
    }
    
    @RequestMapping("/languages/edit/{id}") 
    public String edit(@PathVariable("id") Long id, Model model){
    	Language lang = langServ.findLanguage(id);
    	model.addAttribute("language", lang);
    	return "edit.jsp";
    }
    
    @RequestMapping(value="/languages/{id}", method= RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("language") Language lang, BindingResult result) {
    	if(result.hasErrors()) {
    		return "edit.jsp";
    	} else {
    		langServ.updateLanguage(lang);
    		return "redirect:/languages";
    	}
    }
    
    @RequestMapping(value="/languages/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
        langServ.deleteLanguage(id);
        return "redirect:/languages";
    }
    
}
