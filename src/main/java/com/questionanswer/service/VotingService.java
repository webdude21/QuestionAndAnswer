package com.questionanswer.service;

import java.security.Principal;

import org.springframework.stereotype.Service;

@Service
public interface VotingService {

	void upVote(Principal user, long id) throws IllegalArgumentException;

	void unVote(Principal user, long id) throws IllegalArgumentException;
}
