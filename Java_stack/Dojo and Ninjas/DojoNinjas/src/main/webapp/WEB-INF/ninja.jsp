<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <title>New Ninjas</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">
    <h1 class="mb-4">Assign Ninjas</h1>
    <form:form action="/ninja/form" method="post" modelAttribute="ninjas" class="w-50">
        <div class="mb-3">
            <form:label path="dojo" class="form-label">Dojo</form:label>
            <form:select path="dojo" class="form-select">
            <form:errors path="dojo" class="text-danger" />
                <c:forEach var="oneDojo" items="${dojos}">
                    <form:option value="${oneDojo.id}">
                        ${oneDojo.name} 
                    </form:option>
                </c:forEach>
            </form:select>
        </div>
        <div class="mb-3">
            <form:label path="firstName" class="form-label">FirstName</form:label>
            <form:input path="firstName" class="form-control" />
            <form:errors path="firstName" class="text-danger" />
        </div>

        <div class="mb-3">
            <form:label path="lastName" class="form-label">lastName</form:label>
            <form:input path="lastName" class="form-control" />
            <form:errors path="lastName" class="text-danger" />
        </div>

        <div class="mb-3">
            <form:label path="age" class="form-label">Age </form:label>
            <form:input path="age" type="number" class="form-control" />
            <form:errors path="age" class="text-danger" />
        </div>


        <button type="submit" class="btn btn-success">Create</button>
    </form:form>
</body>
</html>