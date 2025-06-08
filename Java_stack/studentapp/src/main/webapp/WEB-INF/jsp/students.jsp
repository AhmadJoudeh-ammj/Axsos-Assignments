<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Student List</title>
</head>
<body>
    <h2>Student List</h2>

    <c:forEach var="student" items="${students}">
        <p>${student.name} - ${student.age} years old</p>
    </c:forEach>

</body>
</html>