package com.trey.relationships.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.trey.relationships.models.Person;

public interface PersonRepo extends CrudRepository<Person, Long> {
	List<Person> findAll();
}
