package com.questionanswer.data;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.questionanswer.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

	public User findOneByEmail(String email);

	public List<User> findByEmail(String email);
}
