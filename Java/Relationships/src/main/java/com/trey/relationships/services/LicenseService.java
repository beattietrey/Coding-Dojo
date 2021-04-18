package com.trey.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.trey.relationships.models.License;
import com.trey.relationships.repositories.LicenseRepo;

@Service
public class LicenseService {
	private final LicenseRepo licenseRepo;
	
	public LicenseService(LicenseRepo licenseRepo) {
		this.licenseRepo = licenseRepo;
	}
	
	public List<License> allLicenses() {
		return licenseRepo.findAll();
	}
	
	public License createLicense(License license) {
		return licenseRepo.save(license);
	}

	public License findLicense(Long id) {
		Optional<License> search = licenseRepo.findById(id);
		if(search.isPresent()) {
			return search.get();
		} else {
		return null;
		}
	}	
}
