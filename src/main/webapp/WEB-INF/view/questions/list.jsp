<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<t:genericpage>
	<jsp:attribute name="header">
         <h1>Questions</h1>
    </jsp:attribute>
	<jsp:body>
	<ol>
	<c:forEach items="${questionsList.getContent()}" var="question">
		<li>${question.getTitle()}</li>
	</c:forEach>
	</ol>
    </jsp:body>
</t:genericpage>