<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>


<html>
<head>
    <title>Debtors' Prison</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-white min-h-screen flex items-center justify-center">
    <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">Debtors' Prison</h1>
        <p class="text-lg mb-6">You are too far in debt. Better luck next time!</p>
        <a href="/ninjaGold" class="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
            Start Over
        </a>
    </div>
</body>
</html>