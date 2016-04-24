package com.questionanswer.model;

public class AnswerAndVoteCount {

	private int votesCount;

	private String content;

	private long answerId;

	public AnswerAndVoteCount(Answer answer) {
		this.content = answer.getContent();
		this.answerId = answer.getId();
		this.votesCount = answer.getVotedUsers().size();
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

	public long getAnswerId() {
		return answerId;
	}

	public void setAnswerId(long answerId) {
		this.answerId = answerId;
	}
}
