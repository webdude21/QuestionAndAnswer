package questionanswer.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import static questionanswer.GlobalConstants.*;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class Security extends WebSecurityConfigurerAdapter {

	private static final String QUESTIONS_ROUTE = API_BASE_ROUTE + "/questions/**"; 
	
	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication().withUser("webdude").password("webdude").roles("USER", ADMIN);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic().and().authorizeRequests().antMatchers(HttpMethod.POST, QUESTIONS_ROUTE).hasRole(ADMIN)
				.antMatchers(HttpMethod.GET, QUESTIONS_ROUTE).hasRole(ADMIN)
				.antMatchers(HttpMethod.PUT, QUESTIONS_ROUTE).hasRole(ADMIN)
				.antMatchers(HttpMethod.PATCH, QUESTIONS_ROUTE).hasRole(ADMIN).and().csrf().disable();
	}
}