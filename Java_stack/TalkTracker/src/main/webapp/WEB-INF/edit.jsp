<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Edit Talk</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container mt-5">
    <h2>Edit Talk</h2>

    <form action="/talk/${talk.id}/edit" method="post">
        <div class="mb-3">
            <label for="title" class="form-label">Talk Title</label>
            <input type="text" class="form-control" id="title" name="title" value="${talk.title}">
            <c:if test="${not empty errors and errors.hasFieldErrors('title')}">
                <div class="text-danger">
                    <c:forEach var="err" items="${errors.getFieldErrors('title')}">
                        ${err.defaultMessage}<br/>
                    </c:forEach>
                </div>
            </c:if>
        </div>

        <div class="mb-3">
            <label for="date" class="form-label">Date</label>
            <input type="date" class="form-control" id="date" name="date" value="${talk.date}">
            <c:if test="${not empty errors and errors.hasFieldErrors('date')}">
                <div class="text-danger">
                    <c:forEach var="err" items="${errors.getFieldErrors('date')}">
                        ${err.defaultMessage}<br/>
                    </c:forEach>
                </div>
            </c:if>
        </div>

        <div class="mb-3">
            <label for="details" class="form-label">Details</label>
            <textarea class="form-control" id="details" name="details">${talk.details}</textarea>
            <c:if test="${not empty errors and errors.hasFieldErrors('details')}">
                <div class="text-danger">
                    <c:forEach var="err" items="${errors.getFieldErrors('details')}">
                        ${err.defaultMessage}<br/>
                    </c:forEach>
                </div>
            </c:if>
        </div>

        <button type="submit" class="btn btn-primary">Update Talk</button>
        <a href="/home" class="btn btn-secondary">Cancel</a>
    </form>
</div>
</body>
</html>