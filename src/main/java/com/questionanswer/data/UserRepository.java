package com.questionanswer.data;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.questionanswer.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

    User findOneByEmail(String email);

    List<User> findByEmail(String email);
}
