<%@tag description="Overall Page template" pageEncoding="UTF-8"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags"%>
<%@attribute name="header" fragment="true"%>
<%@attribute name="footer" fragment="true"%>
<%@attribute name="pagescripts" fragment="true"%>
<html><t:head></t:head>
<body>
	<header><t:navigation></t:navigation><jsp:invoke fragment="header" /></header>
	<div id="wrapper"><jsp:doBody /></div>
	<footer>
	<hr>
		<p class="text-center">
			<span><a href="http://webdude.eu/">Created by webdude</a></span>
		</p><jsp:invoke fragment="footer" /></footer>
	<t:bodyscripts></t:bodyscripts><jsp:invoke fragment="pagescripts"/>
</body>
</html>