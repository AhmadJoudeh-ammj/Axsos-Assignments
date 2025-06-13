<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Category Details</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-5">

    <h2 class="mb-4">Category: ${category.name}</h2>

    <h4>Products in this Category:</h4>
    <ul class="list-group mb-4">
        <c:forEach var="product" items="${category.products}">
            <li class="list-group-item">${product.name}</li>
        </c:forEach>
    </ul>

    <hr class="my-4"/>

    <h4>Add Product to Category</h4>
    <form action="/categories/${category.id}/addProduct" method="post" class="mt-3">
        <div class="mb-3">
            <label class="form-label">Select Product:</label>
            <select name="productId" class="form-select w-50">
                <c:forEach var="product" items="${allProducts}">
                    <c:if test="${not category.products.contains(product)}">
                        <option value="${product.id}">${product.name}</option>
                    </c:if>
                </c:forEach>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Add</button>
    </form>

    <a href="/" class="btn btn-link mt-4">← Back to Home</a>

</body>
</html>
