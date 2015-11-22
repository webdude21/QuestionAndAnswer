package com.questionanswer;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.questionanswer.data.UserRepository;
import com.questionanswer.model.User;
import com.questionanswer.service.UserService;
import com.questionanswer.service.UserServiceImpl;


public class UserServiceTests {

	private static final String ENCODED_PASSWORD = "encodedPassword";

	private static final String RAW_PASSWORD = "somePassword";

	private static final String VALID_EMAIL = "webdude@dude.eu";

	private User mockedUser;
	
	private UserRepository mockedUserRepo;
	
	private UserService userService;
	
	private PasswordEncoder mockedPasswordEncoder;
	
	public UserServiceTests(){
		this.mockedUser = new User("dimo", "petrov", VALID_EMAIL, RAW_PASSWORD);
		this.mockedUserRepo = mock(UserRepository.class);
		this.mockedPasswordEncoder = mock(PasswordEncoder.class);
		this.userService = new UserServiceImpl(this.mockedUserRepo, this.mockedPasswordEncoder);
	}

	@Test
	public void fetchingAnExistingUser() {
		when(mockedUserRepo.findOneByEmail(VALID_EMAIL)).thenReturn(this.mockedUser);
		UserDetails user = this.userService.loadUserByUsername(VALID_EMAIL);
		assertThat(user, equalTo(this.mockedUser));
	}
	
	@Test(expected=UsernameNotFoundException.class)
	public void requiestingNonExistingUserThrowsException() {
		when(mockedUserRepo.findOneByEmail(VALID_EMAIL)).thenReturn(null);
		this.userService.loadUserByUsername(VALID_EMAIL);
	}
	
	@Test
	public void savingAnUserEncodesThePassword() {
		when(mockedPasswordEncoder.encode(RAW_PASSWORD)).thenReturn(ENCODED_PASSWORD);
		this.userService.save(this.mockedUser);
		assertThat(this.mockedUser.getPassword(), equalTo(ENCODED_PASSWORD));
	}
}
