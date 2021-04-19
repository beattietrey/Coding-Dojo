package com.trey.sample.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trey.sample.models.Sample;
import com.trey.sample.repositories.SampleRepo;

@Service
public class SampleService {

	@Autowired
	private SampleRepo sampleRepo;
	
	public List<Sample> allSamples() {
		return sampleRepo.findAll();
	}
	
	public Sample createSample(Sample sample) {
		return sampleRepo.save(sample);
	}
	
}
