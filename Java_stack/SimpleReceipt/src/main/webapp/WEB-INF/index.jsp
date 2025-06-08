<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<html>
<head><title>Receipt</title></head>
<body>
   
    <p><h1><strong>Customer Name:</strong> <c:out value="Grace Hopper"/> </h1></p>
    <p><strong>Item Name:</strong> <c:out value="Copper Wire" /></p>
    <p><strong>Price:</strong> $<c:out value="5" /></p>
    <p><strong>Description:</strong> <c:out value="Metal strips.Also an illustration of nanoseconds" /></p>
    <p><strong>Vendor:</strong> <c:out value="Little things corner store" /></p>
</body>
</html>