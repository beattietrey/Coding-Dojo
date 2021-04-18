package com.trey.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.trey.relationships.models.Person;
import com.trey.relationships.repositories.PersonRepo;


@Service
public class PersonService {
	private final PersonRepo personRepo;
	
	public PersonService(PersonRepo personRepo) {
		this.personRepo = personRepo;
	}
	
	public List<Person> allPeople() {
		return personRepo.findAll();
	}
	
	public Person createPerson(Person person) {
		return personRepo.save(person);
	}
	
	public Person findPerson(Long id) {
		Optional<Person> search = personRepo.findById(id);
		if(search.isPresent()) {
			return search.get();
		} else {
			return null;
		}
	}
}
