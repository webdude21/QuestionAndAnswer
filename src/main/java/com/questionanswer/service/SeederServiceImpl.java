package com.questionanswer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.questionanswer.data.QuestionRepository;
import com.questionanswer.data.RoleRepository;
import com.questionanswer.data.UserRepository;
import com.questionanswer.model.Question;
import com.questionanswer.model.Role;
import com.questionanswer.model.User;

import org.apache.commons.lang3.RandomStringUtils;
import java.util.ArrayList;
import java.util.Set;

@Service
public class SeederServiceImpl implements SeederService {

	@Autowired
	private QuestionRepository questionRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private RoleRepository roleRepo;

	public void seedQuestions(int entitiesToGenerate) {
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

	public void seedRoles(Iterable<String> roles) {
		if (this.roleRepo.count() != 0){
			return;
		}
		
		roles.forEach(role -> roleRepo.save(new Role(role)));
	}

	public void seedUsers() {
		if (this.userRepo.count() != 0) {
			return;
		}
		
		User user = new User();
		Set<Role> roles = user.getRoles();
		user.setEmail("webdude@webdude.eu");
		user.setFirstName("Dimo");
		user.setLastName("Petrov");
		user.setPassword("webdude");
		roleRepo.findAll().forEach(role -> roles.add(role));
		userRepo.save(user);		
	}
}
