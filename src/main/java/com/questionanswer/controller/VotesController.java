package com.questionanswer.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.questionanswer.config.Routes;
import com.questionanswer.model.ResponseMessage;
import com.questionanswer.service.VotingService;

@RestController
@RequestMapping(value = Routes.API_BASE_ROUTE + "/customviews")
public class VotesController {

    private VotingService votingService;

    @Autowired
    public VotesController(VotingService votingService) {
        this.votingService = votingService;
    }

    @RequestMapping(value = "/answer/{id}/upvote", method = { RequestMethod.PUT })
    public HttpEntity<?> upvote(@PathVariable long id, Principal user) {
       
        try {
            votingService.updateVotes(user, id);
        } catch (IllegalAccessException ex){
            return new ResponseEntity<>(new ResponseMessage(ex.getMessage()), HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(new ResponseMessage("Succesfull vote"), HttpStatus.ACCEPTED);
    }
}