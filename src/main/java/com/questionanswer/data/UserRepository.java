package com.questionanswer.data;

import com.questionanswer.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {

	User findOneByEmail(String email);

	List<User> findByEmail(String email);
}
