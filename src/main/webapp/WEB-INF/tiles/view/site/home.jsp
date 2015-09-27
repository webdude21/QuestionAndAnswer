<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<h1>Questions</h1>
<ol>
	<c:forEach items="${questionsList}" var="question">
		<li>${question.getTitle()}</li>
	</c:forEach>
</ol>