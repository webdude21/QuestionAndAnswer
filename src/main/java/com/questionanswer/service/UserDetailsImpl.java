package com.questionanswer.service;

import java.util.Collection;

import org.springframework.security.core.userdetails.UserDetails;

import com.questionanswer.model.Role;
import com.questionanswer.model.User;

public class UserDetailsImpl extends User implements UserDetails {
	private static final long serialVersionUID = 1L;
	
	private User user;

	UserDetailsImpl(User user){
		super(user);
		this.user  = user;
	}
	
	@Override
	public Collection<Role> getAuthorities() {
		return this.user.getRoles();
	}

	@Override
	public String getPassword() {
		return this.getPassword();
	}

	@Override
	public String getUsername() {
		return this.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
}
