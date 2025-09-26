<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<html>
<head>
    <title>Add Talk</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-5">


    <!-- Page Header -->
    <div class="d-flex justify-content-between align-items-center mt-4 mb-3">
        <h4 class="mb-0">Add New Talk</h4>
        <a href="/home" class="btn btn-secondary">← Back to Dashboard</a>
    </div>

    <!-- Form -->
    <form:form action="/talk" method="post" modelAttribute="talk" class="border p-4 rounded bg-light shadow-sm">
        
        <!-- Talk Title -->
        <div class="mb-3">
            <form:label path="title" class="form-label">Talk Title</form:label>
            <form:input path="title" class="form-control" />
            <form:errors path="title" class="text-danger"/>
        </div>

        <!-- Talk Date -->
        <div class="mb-3">
            <form:label path="date" class="form-label">Talk Date</form:label>
            <form:input path="date" type="date" class="form-control"/>
            <form:errors path="date" class="text-danger"/>
        </div>

        <!-- Talk Details -->
        <div class="mb-3">
            <form:label path="details" class="form-label">Talk Details</form:label>
            <form:textarea path="details" class="form-control" rows="4"/>
            <form:errors path="details" class="text-danger"/>
        </div>

        <!-- Submit -->
        <button type="submit" class="btn btn-primary">Add Talk</button>
    </form:form>

</body>
</html>