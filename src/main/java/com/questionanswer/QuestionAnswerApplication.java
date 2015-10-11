package com.questionanswer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class QuestionAnswerApplication {

    public static void main(String[] args) {
        String webPort = System.getenv("PORT");
        if (webPort == null || webPort.isEmpty()) {
            webPort = "8080";
        }
    	
        SpringApplication.run(QuestionAnswerApplication.class, args);
    }
}
