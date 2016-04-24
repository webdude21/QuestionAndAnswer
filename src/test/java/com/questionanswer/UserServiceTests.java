package com.questionanswer;

import com.questionanswer.data.UserRepository;
import com.questionanswer.model.User;
import com.questionanswer.service.UserService;
import com.questionanswer.service.UserServiceImpl;
import org.junit.Test;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.*;

public class UserServiceTests {

	private static final String ENCODED_PASSWORD = "encodedPassword";

	private static final String RAW_PASSWORD = "somePassword";

	private static final String VALID_EMAIL = "webdude@dude.eu";

	private User mockedUser;

	private UserRepository mockedUserRepo;

	private UserService userService;

	private PasswordEncoder mockedPasswordEncoder;

	public UserServiceTests() {
		this.mockedUser = new User("dimo", "petrov", VALID_EMAIL, RAW_PASSWORD);
		this.mockedUserRepo = mock(UserRepository.class);
		this.mockedPasswordEncoder = mock(PasswordEncoder.class);
		this.userService = new UserServiceImpl(this.mockedUserRepo, this.mockedPasswordEncoder);
	}

	@Test
	public void fetchingAnExistingUser() {
		when(this.mockedUserRepo.findOneByEmail(VALID_EMAIL)).thenReturn(this.mockedUser);
		UserDetails user = this.userService.loadUserByUsername(VALID_EMAIL);
		assertThat(user, equalTo(this.mockedUser));
		verify(this.mockedUserRepo, times(1)).findOneByEmail(VALID_EMAIL);
	}

	@Test(expected = UsernameNotFoundException.class)
	public void requiestingNonExistingUserThrowsException() {
		when(mockedUserRepo.findOneByEmail(VALID_EMAIL)).thenReturn(null);
		this.userService.loadUserByUsername(VALID_EMAIL);
	}

	@Test
	public void savingAnUserEncodesThePassword() {
		when(mockedPasswordEncoder.encode(RAW_PASSWORD)).thenReturn(ENCODED_PASSWORD);
		this.userService.save(this.mockedUser);
		assertThat(this.mockedUser.getPassword(), equalTo(ENCODED_PASSWORD));
		verify(this.mockedPasswordEncoder, times(1)).encode(RAW_PASSWORD);
	}

	@Test
	public void callingSaveActuallySavesTheUserAndReturnsIt() {
		when(mockedUserRepo.save(this.mockedUser)).thenReturn(this.mockedUser);
		User user = this.userService.save(this.mockedUser);
		assertThat(this.mockedUser, equalTo(user));
		verify(this.mockedUserRepo, times(1)).save(this.mockedUser);
	}

	@Test
	public void callingRegisterActuallySavesTheUserAndReturnsIt() {
		when(mockedUserRepo.findOneByEmail(VALID_EMAIL)).thenReturn(null);
		when(mockedUserRepo.save(this.mockedUser)).thenReturn(this.mockedUser);
		User user = this.userService.register(this.mockedUser);
		assertThat(this.mockedUser, equalTo(user));
		verify(this.mockedUserRepo, times(1)).save(this.mockedUser);
	}

	@Test(expected = IllegalArgumentException.class)
	public void callingRegisterWithAnUserWithAlreadyExistingEmailThrowsAnException() {
		when(mockedUserRepo.findOneByEmail(VALID_EMAIL)).thenReturn(this.mockedUser);
		this.userService.register(this.mockedUser);
	}
}
