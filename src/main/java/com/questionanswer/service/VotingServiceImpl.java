package com.questionanswer.service;

import java.security.Principal;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.questionanswer.data.AnswerRepository;
import com.questionanswer.data.UserRepository;
import com.questionanswer.model.Answer;
import com.questionanswer.model.User;

@Service
public class VotingServiceImpl implements VotingService {
    
    private AnswerRepository answersRepo;

    private UserRepository userRepo;

    @Autowired
    public VotingServiceImpl(AnswerRepository answersRepo, UserRepository userRepo) {
        this.answersRepo = answersRepo;
        this.userRepo = userRepo;
    }
    
    private void produceError(String message) throws IllegalArgumentException{
        throw new IllegalArgumentException(message);
    }

    @Override
    @Transactional
    public void updateVotes(Principal user, long id) throws IllegalArgumentException {
        if (user == null) {
            produceError("You must be logged in order to vote");
        }
        
        User votedUser = this.userRepo.findOneByEmail(user.getName());
        
        if (votedUser == null) {
            produceError("You must be logged in order to vote");
        }
        
        Answer answer = this.answersRepo.findOne(id);

        if (answer == null) {
            produceError("You cannot vote for non existing answer");
        }

        boolean userHasAlreadyVoted = votedUser.getAnswersvotes().contains(answer);

        if (userHasAlreadyVoted) {
            produceError("You cannot vote more than once");
        }

        answer.getVotedUsers().add(votedUser);
        votedUser.getAnswersvotes().add(answer);
        
        answersRepo.save(answer);
    }
}
