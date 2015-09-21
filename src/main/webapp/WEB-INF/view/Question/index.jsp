<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/resources/styles/site.css" rel="stylesheet">
<title>Question and Answer</title>
</head>
<body>
	<h1>Questions</h1>
	<ol>
		<c:forEach items="${questionsList}" var="question">
			<li>${question.getTitle()}</li>
		</c:forEach>
	</ol>
</body>
</html>