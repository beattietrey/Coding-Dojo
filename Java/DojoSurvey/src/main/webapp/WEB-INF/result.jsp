    <%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>

    
<!DOCTYPE html>
<html>
<head>
        <link rel="stylesheet" type="text/css" href="css/style.css">

<meta charset="ISO-8859-1">
<title>Results</title>
</head>
<body class="container">
	<h1>Submitted Info</h1>
	<div class="row">
	<div class="col">
		<p>Name:</p>
		<p>Dojo Location:</p>
		<p>Favorite Language:</p>
		<p>Comment:</p>
	</div>
	<div class="col">
		<p><c:out value="${name}"></c:out></p>
		<p><c:out value="${location}"></c:out></p>
		<p><c:out value="${language}"></c:out></p>
		<p><c:out value="${comments}"></c:out></p>
	</div>
	
	</div>
</body>
</html>