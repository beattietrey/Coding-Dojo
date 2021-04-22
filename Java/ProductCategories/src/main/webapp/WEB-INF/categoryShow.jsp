<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>   
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
    
        <%@ page isErrorPage="true" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title><c:out value="${category.name}"/></title>
</head>
<body>
	<h1><c:out value="${category.name}"></c:out></h1>
	<ul>
		<c:forEach items="${prodInCate}" var="prod">
			<li><c:out value="${prod.name}"/></li>
		</c:forEach>
	</ul>
	<form action="/categories/addProduct">
		<input type="hidden" value='<c:out value="${category.id}"/>' name="category_id"/>
		<select name="new_product_id">
			<c:forEach items="${products}" var="prod">
				<c:if test="${!prodInCate.contains(prod)})"></c:if>
					<option value='<c:out value="${prod.id}"/>'><c:out value="${prod.name}"/></option>
			</c:forEach>
		</select>
		<input type="submit" value="Add to Product">
	</form>
</body>
</html>