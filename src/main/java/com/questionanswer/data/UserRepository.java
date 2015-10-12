package com.questionanswer.data;

import org.springframework.data.repository.CrudRepository;

import com.questionanswer.model.User;
import java.lang.String;
import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {

	public User findOneByEmail(String email);

	public List<User> findByEmail(String email);
}
