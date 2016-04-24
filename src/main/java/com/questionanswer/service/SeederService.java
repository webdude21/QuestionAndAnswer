package com.questionanswer.service;

import com.questionanswer.security.Roles;

public interface SeederService {

    void seedQuestions(int entitiesToGenerate);

    void seedRoles(Iterable<String> roles);

    void seedUsers();

    void seedAnswers(int answerPerQuestion);

    default void seed() {
        this.seedRoles(Roles.getRoles());
        this.seedUsers();
        this.seedQuestions(50);
        this.seedAnswers(10);
    }
}
