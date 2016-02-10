package com.questionanswer.service;

public interface SeederService {

    void seedQuestions(int entitiesToGenerate);

    void seedRoles(Iterable<String> roles);

    void seedUsers();

    void seedAnswers(int answerPerQuestion);
}
