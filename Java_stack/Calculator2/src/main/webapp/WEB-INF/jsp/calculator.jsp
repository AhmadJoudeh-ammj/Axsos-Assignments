<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Calculator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body class="container py-5">
    <h2>Enter Full Math Expression</h2>

    <form action="/calc" method="post" class="mb-3">
        <input type="text" name="expression" class="form-control w-50 d-inline" placeholder="e.g. 10.5 + 5.2 * 10" required
               value="${expression != null ? expression : ''}"/>
        <button class="btn btn-primary">Calculate</button>
    </form>

    <c:if test="${not empty result}">
        <div class="alert alert-success">Result: ${result}</div>
    </c:if>

    <c:if test="${not empty error}">
        <div class="alert alert-danger">${error}</div>
    </c:if>
</body>
</html>