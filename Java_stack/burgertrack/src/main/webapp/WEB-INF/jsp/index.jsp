<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Burger Tracker</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-5">

    <h2 class="mb-4">Add a Burger Experience</h2>

    <form:form method="post" modelAttribute="burger" action="/burgers" class="mb-5">
        <div class="mb-3">
            <label>Burger Name:</label>
            <form:input path="burgerName" class="form-control"/>
            <form:errors path="burgerName" cssClass="text-danger"/>
        </div>

        <div class="mb-3">
            <label>Restaurant Name:</label>
            <form:input path="restaurantName" class="form-control"/>
            <form:errors path="restaurantName" cssClass="text-danger"/>
        </div>

        <div class="mb-3">
            <label>Rating (1-5):</label>
            <form:input path="rating" min="1" max="5" class="form-control" type="number"/>
            <form:errors path="rating" cssClass="text-danger"/>
        </div>

        <div class="mb-3">
            <label>Notes:</label>
            <form:textarea path="notes" class="form-control"/>
        </div>

        <button class="btn btn-primary">Add Burger</button>
    </form:form>

 <h3>All Burgers</h3>
<table class="table table-bordered">
    <thead>
        <tr>
            <th>ID</th>
            <th>Burger</th>
            <th>Restaurant</th>
            <th>Rating</th>
            <th>Notes</th>
            <th>Last Updated</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    <c:forEach var="burger" items="${burgers}">
        <tr>
            <td><c:out value="${burger.id}"/></td>
            <td><c:out value="${burger.burgerName}"/></td>
            <td><c:out value="${burger.restaurantName}"/></td>
            <td><c:out value="${burger.rating}"/></td>
            <td><c:out value="${burger.notes}"/></td>
            <td><c:out value="${burger.updatedAt}"/></td>
            <td>
                <a href="/burgers/${burger.id}/update" class="btn btn-warning btn-sm">Edit</a>
            </td>
        </tr>
    </c:forEach>
    </tbody>
</table>
</body>
</html>
