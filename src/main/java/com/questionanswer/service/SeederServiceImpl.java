package com.questionanswer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.questionanswer.data.QuestionRepository;
import com.questionanswer.data.RoleRepository;
import com.questionanswer.data.UserRepository;
import com.questionanswer.model.Question;
import com.questionanswer.model.User;

import org.apache.commons.lang3.RandomStringUtils;
import java.util.ArrayList;

@Service
public class SeederServiceImpl implements SeederService {

	@Autowired
	private QuestionRepository questionRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private RoleRepository roleRepository;

	private final int entitiesToGenerate = 4000;

	public void seedQuestions() {
		if (this.questionRepo.count() != 0) {
			return;
		}

		ArrayList<Question> questions = new ArrayList<>();

		for (int i = 0; i < entitiesToGenerate; i++) {
			questions.add(this.generateQuestion());
		}

		questionRepo.save(questions);
	}

	private Question generateQuestion() {
		Question question = new Question();
		question.setTitle(RandomStringUtils.randomAlphabetic(20));
		question.setContent(RandomStringUtils.randomAlphabetic(200));
		return question;
	}

	@Override
	public void seedRoles() {
	// TODO write implementation
	}

	@Override
	public void seedUsers() {
		if (this.userRepo.count() != 0) {
			return;
		}
		
		User user = new User();
		user.setEmail("webdude@webdude.eu");
		user.setFirstName("Dimo");
		user.setLastName("Petrov");
		user.setPassword("webdude");
		userRepo.save(user);		
	}
}
