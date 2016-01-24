package com.questionanswer.service;

import java.util.ArrayList;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.questionanswer.data.QuestionRepository;
import com.questionanswer.data.RoleRepository;
import com.questionanswer.data.UserRepository;
import com.questionanswer.model.Question;
import com.questionanswer.model.Role;
import com.questionanswer.model.User;

@Service
public class SeederServiceImpl implements SeederService {

	private static final String DEFAULT_USER_EMAIL = "webdude@webdude.eu";

	@Autowired
	private QuestionRepository questionRepo;

	@Autowired
	private UserService userService;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private RoleRepository roleRepo;

	@Override
    public void seedQuestions(int entitiesToGenerate) {
		if (this.questionRepo.count() != 0) {
			return;
		}

		User user = userRepo.findOneByEmail(DEFAULT_USER_EMAIL);

		ArrayList<Question> questions = new ArrayList<>();

		for (int i = 0; i < entitiesToGenerate; i++) {
			questions.add(this.generateQuestion(user));
		}

		questionRepo.save(questions);
	}

	private Question generateQuestion(User user) {
		Question question = new Question();
		question.setTitle(RandomStringUtils.randomAlphabetic(20));
		question.setContent(RandomStringUtils.randomAlphabetic(200));
		question.setUser(user);
		return question;
	}

	@Override
    public void seedRoles(Iterable<String> roles) {
		if (this.roleRepo.count() != 0) {
			return;
		}

		roles.forEach(role -> roleRepo.save(new Role(role)));
	}

	@Override
    public void seedUsers() {
		if (this.userRepo.count() != 0) {
			return;
		}

		Iterable<Role> rolesToAddToTheUser = roleRepo.findAll();
		User user = userService.save(new User("Dimo", "Petrov", DEFAULT_USER_EMAIL, DEFAULT_USER_EMAIL));
		rolesToAddToTheUser.forEach(role -> role.getUsers().add(user));
		roleRepo.save(rolesToAddToTheUser);
	}
}
