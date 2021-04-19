package com.trey.dojoninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trey.dojoninjas.models.Dojo;
import com.trey.dojoninjas.repositories.DojoRepo;

@Service
public class DojoService {

	@Autowired
	private DojoRepo dojoRepo;
	
	public List<Dojo> allDojos() {
		return dojoRepo.findAll();
	}
	
	public Dojo createDojo(Dojo dojo) {
		return dojoRepo.save(dojo);
	}
	
	public Dojo findDojo(Long id) {
		if(dojoRepo.findById(id).isPresent()) {
			return dojoRepo.findById(id).get();
		} else {
			return null;
		}
	}
}
