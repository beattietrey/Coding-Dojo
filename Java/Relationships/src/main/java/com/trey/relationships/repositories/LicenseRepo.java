package com.trey.relationships.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.trey.relationships.models.License;

public interface LicenseRepo extends CrudRepository<License, Long> {
	List<License> findAll();
}
