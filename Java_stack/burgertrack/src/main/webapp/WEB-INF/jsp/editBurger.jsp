<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Edit Burger</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-5">
    <h2>Edit Burger</h2>

   <form:form action="/burgers/${burger.id}/update" method="POST" modelAttribute="burger">
   <form:hidden path="id" value="${burger.id}"/>
	
    <div class="mb-3">
        <form:label path="burgerName">Burger Name:</form:label>
        <form:input path="burgerName" cssClass="form-control"/>
    </div>

    <div class="mb-3">
        <form:label path="restaurantName">Restaurant:</form:label>
        <form:input path="restaurantName" cssClass="form-control"/>
    </div>

    <div class="mb-3">
        <form:label path="rating">Rating:</form:label>
        <form:input path="rating" type="number" cssClass="form-control"/>
    </div>

    <div class="mb-3">
        <form:label path="notes">Notes:</form:label>
        <form:textarea path="notes" cssClass="form-control"/>
    </div>

    <button type="submit" class="btn btn-primary">Update Burger</button>
</form:form>
</body>
</html>