package com.questionanswer.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Answer extends BaseEntityAudit {
    
    private static final long serialVersionUID = 8878653896319636157L;

    @ManyToOne(targetEntity = Question.class)
    private Question question;

    @ManyToOne(targetEntity = User.class)
    private User user;

    @OneToMany(mappedBy = "answer", cascade = { CascadeType.ALL })
    private Set<Vote> votes = new HashSet<>();
    
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

    public User getUser() {
        return user;
    }

    public Set<Vote> getVotes() {
        return votes;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public void setUser(User user) {
        this.user = user;
    }
    
    public void setVotes(Set<Vote> votes) {
        this.votes = votes;
    }
}
