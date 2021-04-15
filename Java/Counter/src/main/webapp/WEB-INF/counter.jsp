<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/style.css">

<meta charset="ISO-8859-1">
<title>Counter</title>
</head>
<body>
	<h1>You have visited <a href="/">LocalHost:8080</a> <c:out value="${count}"/> times</h1>
	<a href="/reset"><button>Reset</button></a>
</body>
</html>