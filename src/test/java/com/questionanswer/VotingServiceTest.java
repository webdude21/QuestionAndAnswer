package com.questionanswer;

import com.questionanswer.data.AnswerRepository;
import com.questionanswer.data.UserRepository;
import com.questionanswer.model.Answer;
import com.questionanswer.model.User;
import com.questionanswer.service.UserService;
import com.questionanswer.service.UserServiceImpl;
import com.questionanswer.service.VotingService;
import com.questionanswer.service.VotingServiceImpl;
import org.junit.Test;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.*;

public class VotingServiceTest {

	private static final String ENCODED_PASSWORD = "encodedPassword";

	private static final String RAW_PASSWORD = "somePassword";

	private static final String VALID_EMAIL = "webdude@dude.eu";

	private static final long VALID_ANSWER_ID = 10;

	private final VotingService voteService;

	private User mockedUser;

	private UserRepository mockedUserRepo;

	private UserService userService;

	private AnswerRepository mockedAnswerRepo;

	private Answer mockedAnswer;

	private PasswordEncoder mockedPasswordEncoder;

	public VotingServiceTest() {
		mockedUser = new User("dimo", "petrov", VALID_EMAIL, RAW_PASSWORD);
		mockedUserRepo = mock(UserRepository.class);
		mockedPasswordEncoder = mock(PasswordEncoder.class);
		mockedAnswerRepo = mock(AnswerRepository.class);
		userService = new UserServiceImpl(mockedUserRepo, mockedPasswordEncoder);
		voteService = new VotingServiceImpl(mockedAnswerRepo, mockedUserRepo);
		mockedAnswer = new Answer();
	}

	@Test(expected = IllegalArgumentException.class)
	public void callingVoteServiceWithIllegalUserThrows() {
		voteService.upVote(null, 1);
	}

	@Test
	public void votingWithAllValidPrerequisitesSucceeds() {
		setupValidCase();
		voteService.upVote(mockedUser, VALID_ANSWER_ID);
		relevantMethodsCalled();
		validCaseVerified();
	}

	private void validCaseVerified() {
		assertThat(mockedAnswer.getVotedUsers().contains(mockedUser), equalTo(true));
		assertThat(mockedUser.getAnswersvotes().contains(mockedAnswer), equalTo(true));
	}

	@Test(expected = IllegalArgumentException.class)
	public void votingWhenAlreadyVotedThrows() {
		setupValidCase();
		voteService.upVote(mockedUser, VALID_ANSWER_ID);

		// voting again throws
		voteService.upVote(mockedUser, VALID_ANSWER_ID);
	}

	private void relevantMethodsCalled() {
		verify(mockedUserRepo, times(1)).findOneByEmail(VALID_EMAIL);
		verify(mockedAnswerRepo, times(1)).findOne(VALID_ANSWER_ID);
		verify(mockedAnswerRepo, times(1)).save(mockedAnswer);
	}

	private void setupValidCase() {
		when(mockedAnswerRepo.findOne(VALID_ANSWER_ID)).thenReturn(mockedAnswer);
		when(mockedUserRepo.findOneByEmail(VALID_EMAIL)).thenReturn(mockedUser);
	}
}
