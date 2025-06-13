<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Product Details</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-5">
    <h2>Product: ${product.name}</h2>

    <h5 class="mt-4">Categories:</h5>
    <ul class="list-group mb-4">
        <c:forEach var="cat" items="${product.categories}">
            <li class="list-group-item">${cat.name}</li>
        </c:forEach>
    </ul>

    <form action="/products/${product.id}/addCategory" method="post" class="row g-3">
        <div class="col-auto">
            <select name="categoryId" class="form-select">
                <c:forEach var="cat" items="${allCategories}">
                    <option value="${cat.id}">${cat.name}</option>
                </c:forEach>
            </select>
        </div>
        <div class="col-auto">
            <button class="btn btn-outline-primary">Add Category</button>
        </div>
    </form>

    <a href="/" class="btn btn-link mt-4">← Back to Home</a>
</body>
</html>