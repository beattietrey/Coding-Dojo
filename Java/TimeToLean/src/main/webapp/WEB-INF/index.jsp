<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
        <!-- Top of page -->
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>   
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    

    <!-- if needing validation -->
    <%@ page isErrorPage="true" %>    
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="js/app.js"></script>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<meta charset="ISO-8859-1">
<title>Login/Register</title>
</head>
<body class="bg-info bg-gradient">
	<div class="container">
		<div class="row mt-5 justify-content-between">
			<div class="col border border-dark rounded p-5 mr-5 bg-light bg-gradient">
				<h3 class="mb-5">Register</h3>
				<p><form:errors path="user.*"/></p>		    
				    <form:form method="POST" action="/register" modelAttribute="user">
				       	<div class="row">
				       		<div class="mr-3">
					            <p><form:label path="email">Email:</form:label></p>
					            <p><form:label path="firstName">First Name:</form:label></p>
					            <p><form:label path="lastName">Last Name:</form:label></p>
					            <p><form:label path="password">Password:</form:label></p>
					            <p><form:label path="passwordConfirmation">Password Confirmation:</form:label></p>   		
				       		</div>
				       		<div class="justify-content-start">
						        <p><form:input type="email" path="email"/></p>
						        <p><form:input type="firstName" path="firstName"/> </p>
						        <p><form:input type="lastName" path="lastName"/></p>
						        <p><form:password path="password"/></p>
						        <p><form:password path="passwordConfirmation"/></p>	       
				       		</div>	       	
				       	</div>
				        <input class=" ml-auto mb-3"type="submit" value="Register!"/>
				    </form:form>
			</div>
			<div class="col border border-dark rounded p-5 mr-5 ml-5 bg-light bg-gradient justify-content-center">
				<h3 class="mb-5">Login</h3>
				<p><c:out value="${error}" /></p>
			    <form method="post" action="/login">
			    	<div class="row">
			       		<div class="mr-3">
				            <p><label for="email">Email</label></p>
				            <p><label for="password">Password</label></p>
				        	<input  class="mb-3" type="submit" value="Login!"/>
			       		</div>
			       		<div>
				            <p><input type="text" id="email" name="email"/></p>
				            <p><input type="password" id="password" name="password"/></p>
			       		</div>	       	
			       	</div>
			    </form> 
			</div>
		</div>
	</div>
</body>
</html>