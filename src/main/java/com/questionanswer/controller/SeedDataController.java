package com.questionanswer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.questionanswer.config.Routes;
import com.questionanswer.security.Roles;
import com.questionanswer.service.SeederService;

@RestController
@RequestMapping(value = Routes.API_BASE_ROUTE + "/seed")
public class SeedDataController {

    private SeederService seederService;

    @Autowired
    public SeedDataController(SeederService seederService) {
        this.seederService = seederService;
    }

    @RequestMapping(value = "", method = { RequestMethod.GET })
    public void seed() {
        seederService.seedRoles(Roles.getRoles());
        seederService.seedUsers();
        seederService.seedQuestions(50);
        seederService.seedAnswers(10);
    }
}
