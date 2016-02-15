package com.questionanswer.service;

import java.util.ArrayList;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.questionanswer.data.AnswerRepository;
import com.questionanswer.data.QuestionRepository;
import com.questionanswer.data.RoleRepository;
import com.questionanswer.data.UserRepository;
import com.questionanswer.model.Answer;
import com.questionanswer.model.Question;
import com.questionanswer.model.Role;
import com.questionanswer.model.User;

@Service
public class SeederServiceImpl implements SeederService {

    private static final String DEFAULT_USER_EMAIL = "webdude@webdude.eu";

    private QuestionRepository questionRepo;

    private RoleRepository roleRepo;

    private UserRepository userRepo;

    private UserService userService;

    private AnswerRepository answerRepo;

    @Autowired
    public SeederServiceImpl(QuestionRepository questionRepo, UserService userService, UserRepository userRepo,
            RoleRepository roleRepo, AnswerRepository answerRepo) {
        super();
        this.questionRepo = questionRepo;
        this.userService = userService;
        this.userRepo = userRepo;
        this.roleRepo = roleRepo;
        this.answerRepo = answerRepo;
    }

    private Question generateQuestion(User user) {
        Question question = new Question();
        question.setTitle(RandomStringUtils.randomAlphabetic(20));
        question.setContent(RandomStringUtils.randomAlphabetic(200));
        question.setUser(user);
        return question;
    }

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

    @Override
    public void seedAnswers(int answerPerQuestion) {
        if (this.answerRepo.count() != 0) {
            return;
        }

        this.questionRepo.findAll().forEach(x -> generateAnswer(x, answerPerQuestion));
    }

    private void generateAnswer(Question question, int answerPerQuestion) {
        ArrayList<Answer> answers = new ArrayList<>();

        User user = this.userRepo.findOneByEmail(DEFAULT_USER_EMAIL);

        for (int i = 0; i < answerPerQuestion; i++) {
            Answer answer = new Answer();
            answer.setQuestion(question);
            answer.setAuthor(user);
            answer.setContent(RandomStringUtils.randomAlphabetic(20));
            answers.add(answer);
        }

        this.answerRepo.save(answers);
    }
}
