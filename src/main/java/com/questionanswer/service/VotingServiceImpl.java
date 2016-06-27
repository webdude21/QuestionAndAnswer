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

	private void produceError(String message) throws IllegalArgumentException {
		throw new IllegalArgumentException(message);
	}

	@Override
	@Transactional
	public void upVote(Principal user, long id) throws IllegalArgumentException {
		User votedUser = getUser(user, id);
		Answer answer = getAnswer(id);
		checkIfCanVote(votedUser, answer);
		answer.getVotedUsers().add(votedUser);
		votedUser.getAnswersvotes().add(answer);
		answersRepo.save(answer);
	}

	@Override
	@Transactional
	public void unVote(Principal user, long id) throws IllegalArgumentException {
		User votedUser = getUser(user, id);
		Answer answer = getAnswer(id);
		checkIfCanUnVote(votedUser, answer);
		answer.getVotedUsers().remove(votedUser);
		votedUser.getAnswersvotes().remove(answer);
		answersRepo.save(answer);
	}

	private void checkIfCanUnVote(User votedUser, Answer answer) {
		if (!votedUser.getAnswersvotes().contains(answer)) {
			produceError("You cannot unvote if not voted");
		}
	}

	private void checkIfCanVote(User votedUser, Answer answer) {
		if (votedUser.getAnswersvotes().contains(answer)) {
			produceError("You cannot vote more than once");
		}
	}

	private Answer getAnswer(long id) throws IllegalArgumentException {
		Answer answer = this.answersRepo.findOne(id);

		if (answer == null) {
			produceError("You cannot vote for non existing answer");
		}
		return answer;
	}

	private User getUser(Principal user, long id) throws IllegalArgumentException {
		if (user == null) {
			produceError("You must be logged in order to vote");
		}

		User votedUser = this.userRepo.findOneByEmail(user.getName());

		if (votedUser == null) {
			produceError("You must be logged in order to vote");
		}
		return votedUser;
	}
}
