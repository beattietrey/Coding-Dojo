package com.codingdojo.trey.languages.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.trey.languages.models.Language;
import com.codingdojo.trey.languages.repositories.LanguageRepo;

@Service
public class LanguageService {
	private final LanguageRepo languageRepo;
	
    public LanguageService(LanguageRepo languageRepo) {
        this.languageRepo = languageRepo;
    }
    
	public List<Language> allLanguages() {
		return languageRepo.findAll();
	}
	
	public Language createLanguage(Language l) {
		return languageRepo.save(l);
	}

	public Language findLanguage(Long id) {
		Optional<Language> optionalLanguage = languageRepo.findById(id);
		if(optionalLanguage.isPresent()) {
			return optionalLanguage.get();
		} else {
			return null;
		}
	}
	
	public Language updateLanguage(Language lang) {
		Optional<Language> updated = languageRepo.findById(lang.getId());
		if(updated.isPresent()) {
//			Language updatedLang = updated.get();
//			updatedLang.setName(lang.getName());
//			updatedLang.setCreator(lang.getCreator());
//			updatedLang.setVersion(lang.getVersion());
			return languageRepo.save(lang);
		} else {
			return null;
		}
	}
	
    public void deleteLanguage(Long id) {
    	Optional<Language> updated = languageRepo.findById(id);
    	if(updated.isPresent()) {
    		languageRepo.deleteById(id);
    	}
    }

}
