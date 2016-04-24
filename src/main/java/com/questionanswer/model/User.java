package com.questionanswer.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class User extends BaseEntityAudit {

	private static final long serialVersionUID = -1525848083627501220L;

	@OneToMany(mappedBy = "author", cascade = {CascadeType.ALL})
	private Set<Answer> answers = new HashSet<>();

	@Email(message = "Please provide a valid email address.")
	@NotEmpty(message = "Email is required.")
	@Column(unique = true, nullable = false)
	private String email;

	@NotEmpty(message = "First name is required.")
	private String firstName;

	@NotEmpty(message = "Last name is required.")
	private String lastName;

	@NotEmpty(message = "Password is required.")
	private String password;

	@OneToMany(mappedBy = "user", cascade = {CascadeType.ALL})
	private Set<Question> questions = new HashSet<>();

	@ManyToMany(mappedBy = "userroles", fetch = FetchType.EAGER)
	private Set<Role> roles = new HashSet<>();

	@ManyToMany(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER)
	private Set<Answer> answersvotes = new HashSet<Answer>();

	public User() {
	}

	public User(String firstName, String lastName, String email, String password) {
		this.setFirstName(firstName);
		this.setLastName(lastName);
		this.setEmail(email);
		this.setPassword(password);
	}

	public User(User user) {
		this.setId(user.getId());
		this.setFirstName(user.getFirstName());
		this.setLastName(user.getLastName());
		this.setEmail(user.getEmail());
		this.setPassword(user.getPassword());
		this.setRoles(user.getRoles());
	}

	@Override
	public boolean equals(Object object) {
		if (!(object instanceof User)) {
			return false;
		}

		User other = (User) object;

		return other.getEmail().equals(this.getEmail());
	}

	public Set<Answer> getAnswers() {
		return answers;
	}

	public void setAnswers(Set<Answer> answers) {
		this.answers = answers;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	// Not a good idea to expose the password even to administrators
	@JsonIgnore
	public String getPassword() {
		return password;
	}

	@JsonProperty
	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(Set<Question> questions) {
		this.questions = questions;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public Set<Answer> getAnswersvotes() {
		return answersvotes;
	}

	public void setAnswersvotes(Set<Answer> answersvotes) {
		this.answersvotes = answersvotes;
	}
}