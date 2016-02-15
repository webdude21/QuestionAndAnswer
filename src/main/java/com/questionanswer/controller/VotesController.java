package com.questionanswer.controller;

import java.security.Principal;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.questionanswer.config.Routes;
import com.questionanswer.data.AnswerRepository;
import com.questionanswer.model.Answer;
import com.questionanswer.model.User;
import com.questionanswer.service.UserService;

@RestController
@RequestMapping(value = Routes.API_BASE_ROUTE + "/customviews")
public class VotesController {

    private AnswerRepository answersRepo;
    
    private UserService userService;

    @Autowired
    public VotesController(AnswerRepository answersRepo, UserService userService) {
        this.answersRepo = answersRepo;
        this.userService = userService;
    }

    @Transactional
    @RequestMapping(value = "/answer/{id}/upvote", method = { RequestMethod.PUT })
    public HttpEntity<?> upvote(@PathVariable long id, Principal user) {
        if (user == null){
            return new ResponseEntity<>("You must be logged in order to vote", HttpStatus.BAD_REQUEST);
        }
        
        User votedUser = (User) this.userService.loadUserByUsername(user.getName());
        
        Answer answer = this.answersRepo.findOne(id);
        
        if (answer == null){
            return new ResponseEntity<>("You cannot vote for non existing answer", HttpStatus.BAD_REQUEST);
        }
        
        boolean userHasAlreadyVoted = answer.getVotedUsers().contains(user);
        
        if (userHasAlreadyVoted){
            return new ResponseEntity<>("You cannot vote more than once", HttpStatus.BAD_REQUEST);
        }
        
        answer.getVotedUsers().add(votedUser);
        
        answersRepo.save(answer);
        
        return new ResponseEntity<>("Succesfull vote", HttpStatus.ACCEPTED);
    }
}