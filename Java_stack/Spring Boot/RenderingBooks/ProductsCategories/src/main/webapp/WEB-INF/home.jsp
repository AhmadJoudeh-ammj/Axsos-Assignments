<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
<title>Home Page</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body class="container py-5">

	<h1 class="mb-4">Product-Category</h1>

	<div class="mb-3">
		<a href="/products/new" class="btn btn-primary me-2">Create
			Product</a> <a href="/categories/new" class="btn btn-success">Create
			Category</a>
	</div>

	<!-- Products with Their Categories -->
	
	<table class="table table-bordered table-striped">
		<thead class="table-dark">
			<tr>
				<th>Product</th>
				<th>Categories</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="product" items="${products}">
				<tr>
					<td><a href="/products/${product.id}">${product.name}</a></td>

					<td><c:forEach var="cat" items="${product.categories}">
							<a href="/categories/${cat.id}">${cat.name }</a>
						</c:forEach></td>

				</tr>
			</c:forEach>
		</tbody>

	</table>
</body>
</html>