<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>


<!DOCTYPE html>
<html>
<head>
        <link rel="stylesheet" type="text/css" href="css/style.css">

<meta charset="ISO-8859-1">
<title>Dojo Survey</title>
</head>
<body>
	<div class="container">
		<form method="POST" action="/result">
			<p><label for="name">Your name: <input type="text" name="name"></label></p>
			<p><label for="location">Your location: <select name="location">
				<option value="Seattle">Seattle</option>
				<option value="Online">Online</option>
				<option value="Chicago">Chicago</option>
				<option value="Austin">Austin</option>
				<option value="Orange County">Orange County</option>
			</select></label></p>
			<p><label for="language">Favorite Language: <select name="language">
				<option value="Python">Python</option>
				<option value="Java">Java</option>
				<option value="C#">C#</option>
			</select></label></p>
			<p><label for="comments">Comments (Optional): <textarea name="comments"></textarea></label> </p>
			<input type="submit" value="Submit">				
		</form>
	</div>
</body>
</html>