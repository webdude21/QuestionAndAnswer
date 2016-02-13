package com.questionanswer.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Question extends BaseEntityAudit {

    private static final long serialVersionUID = -8878864419372308301L;

    @OneToMany(mappedBy = "question", cascade = { CascadeType.ALL })
    private Set<Answer> answers = new HashSet<>();

    private String content;

    private String title;

    @ManyToOne(targetEntity = User.class)
    private User user;

    public Set<Answer> getAnswers() {
        return answers;
    }

    public String getContent() {
        return content;
    }

    public String getTitle() {
        return title;
    }

    public User getUser() {
        return user;
    }

    public void setAnswers(Set<Answer> answers) {
        this.answers = answers;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setUser(User user) {
        this.user = user;
    }
}