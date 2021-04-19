<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>   
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
    
         <%@ page isErrorPage="true" %>    
     
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New Dojo</title>
</head>
<body>
	<form:form action="/dojos" method="post" modelAttribute="dojo">
		<p> 
		<form:label path="name">School Name: </form:label>
		<form:errors path="name"/>
		<form:input path="name"/>
		</p>
		<input type="submit" value="Create">
	</form:form>
</body>
</html>