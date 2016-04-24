package com.questionanswer.service;

import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public interface VotingService {

	void updateVotes(Principal user, long id) throws IllegalArgumentException;
}
