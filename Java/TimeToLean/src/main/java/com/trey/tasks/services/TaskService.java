package com.trey.tasks.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.trey.tasks.models.Task;
import com.trey.tasks.repositories.TaskRepo;

@Service
public class TaskService {
	private final TaskRepo taskRepo;
	
	public TaskService(TaskRepo taskRepo) {
		this.taskRepo = taskRepo;
	}
	
	public List<Task> findByPriority(int priority){
		return taskRepo.findByPriorityContaining(priority);
	}

	public List<Task> findAll() {
		return taskRepo.findAll();
		
	}
	public void createTask(Task task) {
		taskRepo.save(task);
	}
	
	public Optional<Task> findById(Long id) {
		return taskRepo.findById(id);
	}
	
	public Task updateTask(Task task) {
		Optional<Task> updated= taskRepo.findById(task.getId());
		if(updated.isPresent()) {
//			Task update = updated.get();
//			update.setAssignee(task.getAssignee());
//			update.setPriority(task.getPriority());
//			update.setTaskName(task.getTaskName());
//			update.setId(task.getId());
//			update.setCreator(task.getCreator());
			return taskRepo.save(task);
		} else {
			return null;
		}
	}
	
    public void deleteTask(Long id) {
    	Optional<Task> updated = taskRepo.findById(id);
    	if(updated.isPresent()) {
    		taskRepo.deleteById(id);
    	}
    }
}

