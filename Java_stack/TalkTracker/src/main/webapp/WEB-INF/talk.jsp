<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>

<html>
<head>
    <title>Talk Details</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-5">

    <h2>Talk Details</h2>

    <table class="table table-bordered">
        <tr>
            <th>Title</th>
            <td><c:out value="${talk.title}" /></td>
        </tr>
        <tr>
            <th>Date</th>
            <td><c:out value="${talk.date}" /></td>
        </tr>
        <tr>
            <th>Details</th>
            <td><c:out value="${talk.details}" /></td>
        </tr>
        <tr>
            <th>Speaker</th>
            <td><c:out value="${talk.speaker.firstName} ${talk.speaker.lastName}" /></td>
        </tr>
    </table>

    <div class="mt-3">
        <a href="/home" class="btn btn-secondary">Back to Dashboard</a>

        <!-- Only show Edit/Delete if logged-in user is the speaker -->
        <c:if test="${talk.speaker.id == user.id}">
            <a href="/talk/${talk.id}/edit" class="btn btn-warning">Edit</a>

            <form action="/talk/${talk.id}/delete" method="post" style="display:inline;"
                  onsubmit="return confirm('Are you sure you want to delete this talk?');">
                <button class="btn btn-danger" type="submit">Delete</button>
            </form>
        </c:if>
    </div>

    <!-- Attendees Table -->
    <div class="mt-5 d-flex ">
        <table class="table table-bordered table-filled table-sm w-50 text-center">
            <thead class="table-dark">
                <tr>
                    <th>Attendee Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach var="att" items="${talk.attendees}">
                    <tr>
                        <td>${att.firstName} ${att.lastName}</td>
                        <td>
                            <c:if test="${user.id == talk.speaker.id}">
                                <form action="/talk/${talk.id}/attendee/${att.id}/delete" method="post" style="display:inline;">
                                    <button class="btn btn-danger btn-sm" type="submit">Remove</button>
                                </form>
                            </c:if>
                        </td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </div>

</body>
</html>