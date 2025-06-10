<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Book Manager</title>
</head>
<body>
    <h1>All Books</h1>
    <ul>
        <c:forEach var="book" items="${books}">
            <li><strong>${book.title}</strong>: ${book.description}</li>
        </c:forEach>
    </ul>

    <h2>Add New Book</h2>
    <form action="/books" method="POST">
        Title: <input type="text" name="title"><br>
        Description: <input type="text" name="description"><br>
        <input type="submit" value="Add Book">
    </form>
</body>
</html>