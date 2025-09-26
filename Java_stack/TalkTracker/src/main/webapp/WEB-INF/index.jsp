<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
<title>HomePage</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body class="container py-5">

	<div class="row">
		<!-- Login Form -->
		<div class="col-md-6">
			<h3>Login</h3>
			<form:form action="/login" method="post" modelAttribute="newLogin">
				<div class="mb-3">
					<form:label path="email">Email</form:label>
					<form:input path="email" class="form-control" />
					<form:errors path="email" class="text-danger" />
				</div>
				<div class="mb-3">
					<form:label path="password">Password</form:label>
					<form:password path="password" class="form-control" />
					<form:errors path="password" class="text-danger" />
				</div>
				<button type="submit" class="btn btn-primary">Login</button>
			</form:form>
		</div>

		<!-- Registration Form -->
		<div class="col-md-6">
			<h3>Register</h3>
			<form:form action="/register" method="post" modelAttribute="newUser">
				<div class="mb-3">
					<form:label path="firstName">First Name</form:label>
					<form:input path="firstName" class="form-control" />
					<form:errors path="firstName" class="text-danger" />
				</div>

				<div class="mb-3">
					<form:label path="lastName">Last Name</form:label>
					<form:input path="lastName" class="form-control" />
					<form:errors path="lastName" class="text-danger" />
				</div>


				<div class="mb-3">
					<form:label path="email">Email</form:label>
					<form:input path="email" class="form-control" />
					<form:errors path="email" class="text-danger" />
				</div>
				<div class="mb-3">
					<form:label path="password">Password</form:label>
					<form:password path="password" class="form-control" />
					<form:errors path="password" class="text-danger" />
				</div>
				<div class="mb-3">
					<form:label path="confirmPassword">Confirm Password</form:label>
					<form:password path="confirmPassword" class="form-control" />
					<form:errors path="confirmPassword" class="text-danger" />
				</div>
				<button type="submit" class="btn btn-success">Sign Up</button>
			</form:form>
		</div>
	</div>

	<!-- Display Global Errors (optional) -->
	<c:if test="${not empty error}">
		<div class="alert alert-danger mt-3">${error}</div>
	</c:if>

</body>
</html>