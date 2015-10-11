package com.questionanswer.data;

import org.springframework.data.repository.CrudRepository;

import com.questionanswer.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
