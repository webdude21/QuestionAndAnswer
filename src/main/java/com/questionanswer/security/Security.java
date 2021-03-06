package com.questionanswer.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.questionanswer.config.Routes;
import com.questionanswer.data.QuestionRepository;

@Configuration
@EnableGlobalMethodSecurity()
public class Security extends WebSecurityConfigurerAdapter {

	private static final String QUESTIONS_ROUTE = "/" + Routes.API_BASE_ROUTE + QuestionRepository.ROUTE + "/**";

	@Autowired
	private UserDetailsService userDetailsService;

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(this.userDetailsService).passwordEncoder(this.passwordEncoder());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
			.antMatchers(HttpMethod.GET, QUESTIONS_ROUTE)
			.permitAll()
			.antMatchers(QUESTIONS_ROUTE)
			.hasAuthority(Roles.ADMIN).and().httpBasic().and().csrf().disable();
	}
}