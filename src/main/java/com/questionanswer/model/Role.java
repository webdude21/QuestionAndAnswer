package com.questionanswer.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.security.core.GrantedAuthority;

@Entity
public class Role extends BaseEntityAudit implements GrantedAuthority {

    private static final long serialVersionUID = 1L;

    @ManyToMany(cascade = { CascadeType.ALL }, fetch = FetchType.EAGER)
    private Set<User> userroles = new HashSet<User>();

    @NotEmpty
    private String role;

    public Role(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Role() {

    }

    public Set<User> getUsers() {
        return userroles;
    }

    public void setUsers(Set<User> users) {
        this.userroles = users;
    }

    @Override
    public String getAuthority() {
        return this.getRole();
    }
}
