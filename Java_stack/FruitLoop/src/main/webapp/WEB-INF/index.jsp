<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
    <title>Fruit List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 30px;
        }
        h1 {
            color: #2c3e50;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            padding: 8px;
            background-color: #f1f1f1;
            margin-bottom: 5px;
            border-radius: 5px;
        }
    </style>
</head>
<body>

<h1>Fruit List</h1>

<ul>
    <c:forEach var="fruit" items="${fruits}">
        <li>
            <strong>${fruit.name}</strong> - $${fruit.price}
        </li>
    </c:forEach>
</ul>

</body>
</html>