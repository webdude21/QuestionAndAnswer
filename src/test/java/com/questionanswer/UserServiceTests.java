package com.questionanswer;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.questionanswer.data.UserRepository;
import com.questionanswer.model.User;
import com.questionanswer.service.UserService;
import com.questionanswer.service.UserServiceImpl;


public class UserServiceTests {

	private static final String VALID_EMAIL = "webdude@dude.eu";

	private User mockedUser;
	
	private UserRepository mockedUserRepo;
	
	private UserService userService;
	
	public UserServiceTests(){
		this.mockedUser = new User("dimo", "petrov", VALID_EMAIL, "somePassword");
		this.mockedUserRepo = mock(UserRepository.class);
		this.userService = new UserServiceImpl(this.mockedUserRepo);
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

}
