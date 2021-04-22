<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>   
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
    
        <%@ page isErrorPage="true" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title><c:out value="${product.name }"/></title>
</head>
<body>
	<h1><c:out value="${product.name }"/></h1>
	<ul>
	<c:forEach items="${cateInProd}" var="cate">
		<li><c:out value="${cate.name}"/></li>
	</c:forEach>
	</ul>
	
	<form:form action="/products/addCategory" method="post" modelAttribute="">
		
	</form:form>
</body>
</html>