package com.questionanswer.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class User extends BaseEntityAudit {

    private static final long serialVersionUID = -1525848083627501220L;

    @OneToMany(mappedBy = "user", cascade = { CascadeType.ALL })
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

    @OneToMany(mappedBy = "user", cascade = { CascadeType.ALL })
    private Set<Question> questions = new HashSet<>();

    @ManyToMany(mappedBy = "userroles", fetch = FetchType.EAGER)
    private Set<Role> roles = new HashSet<>();

    @ManyToMany(mappedBy = "uservotes", fetch = FetchType.EAGER)
    private Set<Vote> votes = new HashSet<>();

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

    public String getEmail() {
        return email;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    // Not a good idea to expose the password even to administrators
    @JsonIgnore
    public String getPassword() {
        return password;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public Set<Vote> getVotes() {
        return votes;
    }

    public void setAnswers(Set<Answer> answers) {
        this.answers = answers;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public void setVotes(Set<Vote> votes) {
        this.votes = votes;
    }
}