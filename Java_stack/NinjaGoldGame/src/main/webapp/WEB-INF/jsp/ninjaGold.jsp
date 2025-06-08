<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<html>
<head>
    <title>Ninja Gold Game</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-yellow-100 to-orange-200 min-h-screen p-6">

<div class="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
    <h1 class="text-3xl font-bold text-center text-yellow-700 mb-6">Ninja Gold</h1>

    <div class="text-xl mb-4">
        Current Gold: <span class="font-bold text-yellow-600">${sessionScope.gold}</span>
    </div>

    <!-- Forms -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <c:forEach var="place" items="${['farm','cave','house','quest','spa']}">
            <form action="/ninjaGold/process" method="post">
                <input type="hidden" name="place" value="${place}" />
                <button type="submit"
                        class="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                    ${fn:toUpperCase(place)}
                </button>
            </form>
        </c:forEach>
        <!-- Reset -->
        <form action="/ninjaGold/process" method="post" class="col-span-full">
            <input type="hidden" name="place" value="reset" />
            <button type="submit"
                    class="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                Reset Game
            </button>
        </form>
    </div>

    <!-- Activity Log -->
    <div class="bg-gray-100 rounded p-4 max-h-64 overflow-y-auto">
        <h2 class="text-lg font-bold mb-2">Activity Log:</h2>
        <c:forEach var="entry" items="${sessionScope.log}">
            <p class="mb-1">${entry}</p>
        </c:forEach>
    </div>
</div>
</body>
</html>