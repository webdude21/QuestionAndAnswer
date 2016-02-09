package com.questionanswer.controller;

import com.questionanswer.config.Routes;
import com.questionanswer.model.User;
import com.questionanswer.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping(value = Routes.API_BASE_ROUTE + "/authentication")
public class UserController {

    private UserService userService;
    
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/currentuser", method = { RequestMethod.GET })
    public Principal currentUser(Principal user) {
        return user;
    }

    @RequestMapping(value = "/register", method = { RequestMethod.POST })
    public HttpEntity<?> Register(@RequestBody User user) {

        if (this.userService.loadUserByUsername(user.getEmail()) != null) {
            return new ResponseEntity<>("User with the same email already exists!", HttpStatus.BAD_REQUEST);
        }

        try {
            User savedUser = this.userService.save(user);
            return new ResponseEntity<User>(savedUser, HttpStatus.CREATED);
        } catch (DataIntegrityViolationException ex) {
            return prepareExceptionResponce(ex);
        }
    }

    private HttpEntity<?> prepareExceptionResponce(Exception ex) {
        String errorMessage;
        errorMessage = ex + " <== error";
        return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
    }
}