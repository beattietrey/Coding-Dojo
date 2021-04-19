package com.trey.sample.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.trey.sample.models.Sample;

@Repository
public interface SampleRepo extends CrudRepository<Sample, Long> {
	List<Sample> findAll();
}
