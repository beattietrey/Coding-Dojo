<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>   
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
    <%@ page isErrorPage="true" %>    
    
    
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/style.css">
<script type="text/javascript" src="js/app.js"></script>
<meta charset="ISO-8859-1">
<title>Languages</title>
</head>
<body>
	<h1>All Languages</h1>
	<table>
	    <thead>
	        <tr>
	            <th>Name</th>
	            <th>Creator</th>
	            <th>Version</th>
	            <th>Actions</th>
	        </tr>
	    </thead>
	    <tbody>
	        <c:forEach items="${langs}" var="lang">
	        <tr>
	            <td>
		            <a href="/languages/${lang.id}">
			            <c:out value="${lang.name}"/>
		            </a>
			    </td>
	            
	            <td><c:out value="${lang.creator}"/></td>
	            <td><c:out value="${lang.version}"/></td>
	            <td>
	            	<a href="/languages/edit/${lang.id}"><button>Edit</button></a>
	            	
					<form action="/languages/${lang.id}" method="post">
					    <input type="hidden" name="_method" value="delete">
					    <input type="submit" value="Delete">
					</form>
	            </td>
	        </tr>
	        </c:forEach>
	    </tbody>
	</table>
	<form:form action="/languages" method="post" modelAttribute="language">
	<p><form:errors path="name"/></p>
    <p>
        <form:label path="name">Name</form:label>
        <form:input path="name"/>
    </p>
    <p>
        <form:label path="creator">Creator</form:label>
        <form:textarea path="creator"/>
    </p>
    <p><form:errors path="creator"/></p>
    <p>
        <form:label path="version">Version</form:label>
        <form:input path="version"/>
    </p>
    <p><form:errors path="version"/></p>
    <input type="submit" value="Submit"/>
</form:form>   
</body>
</html>