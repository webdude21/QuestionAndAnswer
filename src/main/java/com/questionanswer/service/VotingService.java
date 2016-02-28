package com.questionanswer.service;

import java.security.Principal;

import org.springframework.stereotype.Service;

@Service
public interface VotingService {
    
    void updateVotes(Principal user, long id) throws IllegalArgumentException;
}
