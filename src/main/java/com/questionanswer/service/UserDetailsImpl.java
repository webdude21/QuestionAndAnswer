package com.questionanswer.service;

import java.util.Collection;

import org.springframework.security.core.userdetails.UserDetails;

import com.questionanswer.model.Role;
import com.questionanswer.model.User;

public class UserDetailsImpl extends User implements UserDetails {
	private static final long serialVersionUID = 1L;

	UserDetailsImpl(User user) {
		super(user);
	}

	@Override
	public Collection<Role> getAuthorities() {
		return super.getRoles();
	}

	@Override
	public String getPassword() {
		return super.getPassword();
	}

	@Override
	public String getUsername() {
		return super.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
