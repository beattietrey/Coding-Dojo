<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
        <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>   
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title><c:out value="${dojo.name}"></c:out></title>
</head>
<body>
	<h1><c:out value="${dojo.name}"></c:out></h1>
	<table>
		<thead>
			<tr>
				<th>Student First Name</th>
				<th>Student Last Name</th>
				<th>Student Age</th>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${dojo.ninjas}" var ="s">
			<tr>
				<th><c:out value="${s.firstName}"/></th>
				<th><c:out value="${s.lastName}"/></th>
				<th><c:out value="${s.age}"/></th>
			</tr>
		</c:forEach>
		</tbody>
	</table>
</body>
</html>