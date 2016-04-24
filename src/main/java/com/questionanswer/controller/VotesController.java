package com.questionanswer.controller;

import com.questionanswer.config.Routes;
import com.questionanswer.model.ResponseMessage;
import com.questionanswer.service.VotingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping(value = Routes.API_BASE_ROUTE + "/customviews")
public class VotesController {

	private VotingService votingService;

	@Autowired
	public VotesController(VotingService votingService) {
		this.votingService = votingService;
	}

	@RequestMapping(value = "/answer/{id}/upvote", method = {RequestMethod.PUT})
	public HttpEntity<?> upvote(@PathVariable long id, Principal user) {

		try {
			votingService.upVote(user, id);
		} catch (IllegalArgumentException ex) {
			return new ResponseEntity<>(new ResponseMessage(ex.getMessage()), HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(new ResponseMessage("Successful vote"), HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "/answer/{id}/unvote", method = {RequestMethod.PUT})
	public HttpEntity<?> unVote(@PathVariable long id, Principal user) {

		try {
			votingService.unVote(user, id);
		} catch (IllegalArgumentException ex) {
			return new ResponseEntity<>(new ResponseMessage(ex.getMessage()), HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(new ResponseMessage("Successful unVote"), HttpStatus.ACCEPTED);
	}
}