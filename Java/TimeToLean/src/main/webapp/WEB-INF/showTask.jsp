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
    <link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/javascript" src="js/app.js"></script>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<meta charset="ISO-8859-1">
<title><c:out value="${task.name}"/></title>
</head>
<body>
	<div class="container">
		<h1 class="mt-5 mb-5"><c:out value="${task.name}"/></h1>
		<div class="row justify-content-around">
			<div class="col ml-5">
				<p>Name:</p>
				<p>Priority Level:</p>
				<p>Duration:</p>
				<p>Category:</p>
				<p>Description:</p>
			</div>
			<div class="col">
				<form:form action="/editTask/<c:out value='${task.id}'/>" method="post" modelAttribute="task">
				<p>			        
					<form:errors path="name"/>
			        <form:input path="name"/>
			    </p>
			    <p>
			    	<form:select path="priority">
						<form:option value="1">1</form:option>
						<form:option value="2">2</form:option>
						<form:option value="3">3</form:option>
						<form:option value="4">4</form:option>
						<form:option value="5">5</form:option>
						<form:option value="6">6</form:option>						
						<form:option value="7">7</form:option>
						<form:option value="8">8</form:option>
						<form:option value="9">9</form:option>						
						<form:option value="10">10</form:option>
					</form:select>
				</p>
			   <p>
			   		<form:errors path="duration"/>
			        <form:select path="duration">
						<form:option value="1">1</form:option>
						<form:option value="2">2</form:option>
						<form:option value="3">3</form:option>
						<form:option value="4">4</form:option>
						<form:option value="5">5</form:option>
						<form:option value="6">6</form:option>						
						<form:option value="7">7</form:option>
						<form:option value="8">8</form:option>
						<form:option value="9">9</form:option>						
						<form:option value="10">10</form:option>
						<form:option value="11">11</form:option>
						<form:option value="12">12</form:option>
						<form:option value="13">13</form:option>
						<form:option value="14">14</form:option>
						<form:option value="15">15</form:option>
						<form:option value="16">16</form:option>						
						<form:option value="17">17</form:option>
						<form:option value="18">18</form:option>
						<form:option value="19">19</form:option>						
						<form:option value="20">20</form:option>
						<form:option value="21">21</form:option>
						<form:option value="22">22</form:option>
						<form:option value="23">23</form:option>
						<form:option value="24">24</form:option>
						<form:option value="25">25</form:option>
						<form:option value="26">26</form:option>						
						<form:option value="27">27</form:option>
						<form:option value="28">28</form:option>
						<form:option value="29">29</form:option>	
						<form:option value="30">30</form:option>
						<form:option value="31">31</form:option>
						<form:option value="32">32</form:option>
						<form:option value="33">33</form:option>
						<form:option value="34">34</form:option>
						<form:option value="35">35</form:option>
						<form:option value="36">36</form:option>						
						<form:option value="37">37</form:option>
						<form:option value="38">38</form:option>
						<form:option value="39">39</form:option>
						<form:option value="40">40</form:option>
						<form:option value="41">41</form:option>
						<form:option value="42">42</form:option>
						<form:option value="43">43</form:option>
						<form:option value="44">44</form:option>
						<form:option value="45">45</form:option>
						<form:option value="46">46</form:option>						
						<form:option value="47">47</form:option>
						<form:option value="48">48</form:option>
						<form:option value="49">49</form:option>
						<form:option value="50">50</form:option>
						<form:option value="51">51</form:option>
						<form:option value="52">52</form:option>
						<form:option value="53">53</form:option>
						<form:option value="54">54</form:option>
						<form:option value="55">55</form:option>
						<form:option value="56">56</form:option>						
						<form:option value="57">57</form:option>
						<form:option value="58">58</form:option>
						<form:option value="59">59</form:option>
						<form:option value="60">60</form:option>
					</form:select>
					<form:select path="unitOfTime">
						<form:option value="minutes">Minutes</form:option>
						<form:option value="hours">Hours</form:option>
						<form:option value="days">Days</form:option>
					</form:select>
				</p>
				<p>
					<form:errors path="category"/>
					<form:input path="category"/>
				</p>
				<p>
					<form:errors path="description"/>
					<form:textarea path="description"/>
				</p>
				<p>
					<input type="submit" value="Edit Task" class="btn btn-primary btn-sm d-block mr-5">
				</p>
				</form:form>
			</div>
		</div>
	</div>
</body>
</html>