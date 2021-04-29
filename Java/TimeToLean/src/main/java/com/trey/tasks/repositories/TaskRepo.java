package com.trey.tasks.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.trey.tasks.models.Task;

@Repository
public interface TaskRepo extends CrudRepository<Task, Long>{
	Optional<Task> findById(Long id);
	List<Task> findAll();
	List<Task> findByPriorityContaining(int priority);
}
