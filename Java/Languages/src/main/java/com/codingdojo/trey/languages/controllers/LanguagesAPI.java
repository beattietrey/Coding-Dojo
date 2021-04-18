package com.codingdojo.trey.languages.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.codingdojo.trey.languages.models.Language;
import com.codingdojo.trey.languages.services.LanguageService;

@RestController
public class LanguagesAPI {
	
	private final LanguageService languageService;
	
	public LanguagesAPI(LanguageService languageService) {
		this.languageService = languageService;
	}
	
	@RequestMapping("/api/languages")
	public List<Language> index() {
		return languageService.allLanguages();
	}
	
	@RequestMapping(value="/api/languages", method=RequestMethod.POST)
	public Language create(@RequestParam(value="name") String name, @RequestParam(value="creator") String creator, @RequestParam(value="version") String version ) {
		Language lang = new Language(name, creator, version);
		return languageService.createLanguage(lang);
	}
}
