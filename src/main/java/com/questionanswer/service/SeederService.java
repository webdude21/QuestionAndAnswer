package com.questionanswer.service;

public interface SeederService {
	
	public void seedQuestions(int entitiesToGenerate);
	
	public void seedRoles(Iterable<String> roles);
	
	public void seedUsers();
}
