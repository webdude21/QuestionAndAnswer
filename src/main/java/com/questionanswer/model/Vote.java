package com.questionanswer.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Vote extends BaseEntityAudit {

    private static final long serialVersionUID = 6232836783670076814L;
    
    @ManyToMany(cascade = { CascadeType.ALL }, fetch = FetchType.EAGER)
    private Set<User> uservotes = new HashSet<>();
    

    public Set<User> getUservotes() {
        return uservotes;
    }

    public void setUservotes(Set<User> uservotes) {
        this.uservotes = uservotes;
    }

    public Answer getAnswer() {
        return answer;
    }

    public void setAnswer(Answer answer) {
        this.answer = answer;
    }

    @ManyToOne(targetEntity = Answer.class)
    private Answer answer;
}
