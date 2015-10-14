package com.questionanswer.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.questionanswer.config.Routes;
import com.questionanswer.data.QuestionRepository;

@Configuration
@EnableGlobalMethodSecurity
public class Security extends WebSecurityConfigurerAdapter {

	private static final String QUESTIONS_ROUTE = "/" + Routes.API_BASE_ROUTE + QuestionRepository.ROUTE + "/**";

	@Autowired
	private UserDetailsService userDetailsService;

	public void registerAuthentication(AuthenticationManagerBuilder auth) throws Exception {
	        auth.userDetailsService(userDetailsService);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic().and().authorizeRequests().antMatchers(HttpMethod.POST, QUESTIONS_ROUTE).hasRole(Roles.ADMIN)
				.antMatchers(HttpMethod.GET, QUESTIONS_ROUTE).hasRole(Roles.ADMIN)
				.antMatchers(HttpMethod.PUT, QUESTIONS_ROUTE).hasRole(Roles.ADMIN)
				.antMatchers(HttpMethod.PATCH, QUESTIONS_ROUTE).hasRole(Roles.ADMIN);
	}
}