package com.questionanswer;

import com.questionanswer.data.AnswerRepository;
import com.questionanswer.data.UserRepository;
import com.questionanswer.model.User;
import com.questionanswer.service.UserService;
import com.questionanswer.service.UserServiceImpl;
import com.questionanswer.service.VotingService;
import com.questionanswer.service.VotingServiceImpl;
import org.junit.Test;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.mockito.Mockito.mock;

public class VotingServiceTest {

	private static final String ENCODED_PASSWORD = "encodedPassword";

	private static final String RAW_PASSWORD = "somePassword";

	private static final String VALID_EMAIL = "webdude@dude.eu";

	private final VotingService voteService;

	private User mockedUser;

	private UserRepository mockedUserRepo;

	private UserService userService;

	private AnswerRepository mockedAnswerRepo;

	private PasswordEncoder mockedPasswordEncoder;

	public VotingServiceTest() {
		mockedUser = new User("dimo", "petrov", VALID_EMAIL, RAW_PASSWORD);
		mockedUserRepo = mock(UserRepository.class);
		mockedPasswordEncoder = mock(PasswordEncoder.class);
		mockedAnswerRepo = mock(AnswerRepository.class);
		userService = new UserServiceImpl(mockedUserRepo, mockedPasswordEncoder);
		voteService = new VotingServiceImpl(mockedAnswerRepo, mockedUserRepo);
	}

	@Test(expected = IllegalArgumentException.class)
	public void callingVoteServiceWithIllegalUserThrows() {
		voteService.upVote(null, 1);
	}
}
