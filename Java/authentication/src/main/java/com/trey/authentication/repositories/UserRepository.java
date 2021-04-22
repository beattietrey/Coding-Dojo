package com.trey.authentication.repositories;

import org.springframework.data.repository.CrudRepository;

import com.trey.authentication.models.User;

public interface UserRepository extends CrudRepository<User, Long> {
	User findByEmail(String email);
	User findById();
}
