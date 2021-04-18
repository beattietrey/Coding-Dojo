<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit ${language.name}</title>
</head>
<body>
<h1>Edit ${language.name}</h1>
	<form:form action="/languages/${language.id}" method="post" modelAttribute="language">
	<input type="hidden" name="_method" value="put">
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