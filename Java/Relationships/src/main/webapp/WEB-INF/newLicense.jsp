<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>   
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
        <%@ page isErrorPage="true" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New License</title>
</head>
<body>
	<h1>New License</h1>
	<form:form action="/licenses/new" method="post" modelAttribute="license">
	<p><form:label path="person">Person: </form:label>
	    <form:errors path="person"/>
	<form:select path="person">
	<c:forEach items="${people}" var="person">
		<c:if test="${empty person.license}">
		<form:option value="${person}"><c:out value="${person.firstName} ${person.lastName}"/></form:option>
		</c:if>
	</c:forEach>
	</form:select>
	</p>
	<p>
	<form:label path="state">State: </form:label>
	<form:input path="state"/>
	        <form:errors path="state"/>
	</p>
	<p>
	<form:label path="expirationDate">Expiration Date: </form:label>
	<input type="date" value="expirationDate">
			        <form:errors path="state"/>
	
	<p>
	<input type="submit" value="Create"/>
	</p>
	</form:form>
</body>
</html>