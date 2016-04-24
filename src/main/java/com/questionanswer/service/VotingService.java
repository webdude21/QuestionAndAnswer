package com.questionanswer.service;

import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public interface VotingService {

	void upVote(Principal user, long id) throws IllegalArgumentException;

	void unVote(Principal user, long id) throws IllegalArgumentException;
}
