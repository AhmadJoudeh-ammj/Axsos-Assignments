<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Simple Calculator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-5">
    <h2>Simple Calculator</h2>

    <form:form action="/calculate" method="post" modelAttribute="calculator">
        <div class="mb-3">
            <label>Operand One:</label>
            <form:input path="operandOne" type="number" step="any" class="form-control"/>
        </div>

        <div class="mb-3">
            <label>Operation:</label>
            <form:select path="operation" class="form-select">
                <form:option value="+">+</form:option>
                <form:option value="-">-</form:option>
            </form:select>
        </div>

        <div class="mb-3">
            <label>Operand Two:</label>
            <form:input path="operandTwo" type="number" step="any" class="form-control"/>
        </div>

        <button type="submit" class="btn btn-primary">Calculate</button>
    </form:form>
</body>
</html>