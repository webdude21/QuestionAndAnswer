package com.questionanswer.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Answer extends BaseEntityAudit {
    
    private static final long serialVersionUID = 8878653896319636157L;

    @ManyToOne(targetEntity = Question.class)
    private Question question;

    @ManyToOne(targetEntity = User.class)
    private User author;

    @ManyToMany(mappedBy = "answersvotes", cascade = { CascadeType.ALL })
    private Set<User> votedUsers = new HashSet<>();
    
    public Set<User> getVotedUsers() {
        return votedUsers;
    }

    public void setVotedUsers(Set<User> votedUsers) {
        this.votedUsers = votedUsers;
    }

    private String content;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Question getQuestion() {
        return question;
    }

    public User getAuthor() {
        return author;
    }  

    public void setQuestion(Question question) {
        this.question = question;
    }

    public void setAuthor(User user) {
        this.author = user;
    }
}
