package com.questionanswer.model;

public class AnswerAndVoteCount {

    private int votesCount;

    private String content;

    public AnswerAndVoteCount(Answer answer) {
        this.content = answer.getContent();
        this.votesCount = answer.getVotes().size();

    }

    public int getVotesCount() {
        return votesCount;
    }

    public void setVotesCount(int votesCount) {
        this.votesCount = votesCount;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
