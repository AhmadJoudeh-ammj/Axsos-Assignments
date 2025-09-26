<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>

<html>
<head>
<title>Dashboard</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body class="container py-5">

	<div class="alert alert-success d-flex justify-content-between">
		<h2>
			Welcome,
			<c:out value="${user.firstName} ${user.lastName}" />
			!
		</h2>
		<a href="/logout" class="btn btn-danger" style="height:37.5px">Logout</a>
	</div>

	<div class="d-flex justify-content-between align-items-center mt-4 mb-3">
        <h4 class="mb-0">TalkTracker Dashboard</h4>
        <a href="/addtalk" class="btn btn-primary">+ Add Talk</a>
    </div>
	
	<!-- Talk Table -->
    <table class="table table-striped table-bordered mt-4">
        <thead class="table-dark">
            <tr>
                <th>ID</th>
                <th>Talk Title</th>
                <th>Talk Date</th>
                <th>Speaker</th>
                <th>Attend</th>
            </tr>
        </thead>
        <tbody>
        <c:forEach var="talk" items="${talks}">
            <tr>
                <td>${talk.id}</td>
                <td>
                    <a href="/talk/${talk.id}">
                        <c:out value="${talk.title}" />
                    </a>
                </td>
                <td>${talk.date}</td>
                <td>
                    <c:choose>
                        <c:when test="${not empty talk.speaker}">
                            ${talk.speaker.firstName} ${talk.speaker.lastName}
                        </c:when>
                        <c:otherwise>
                            Anonymous
                        </c:otherwise>
                    </c:choose>
                </td>
                <td>
                    <c:if test="${user.id != talk.speaker.id}">
                        <button class="btn btn-sm attendBtn" data-talk-id="${talk.id}"
            style="background: linear-gradient(45deg, #6a11cb, #2575fc); color: white;">
        <c:choose>
            <c:when test="${talk.attendees != null && talk.attendees.contains(user)}">
                Not Attend
            </c:when>
            <c:otherwise>
                Attend
            </c:otherwise>
        </c:choose>
    </button>
                    </c:if>
                </td>
            </tr>
        </c:forEach>
        </tbody>
    </table>

    <script>
        document.querySelectorAll('.attendBtn').forEach(button => {
            button.addEventListener('click', function() {
                const talkId = this.dataset.talkId;
                const btn = this;

                fetch(`/talk/${talkId}/attend`, {
                    method: 'POST',
                    headers: { 'X-Requested-With': 'XMLHttpRequest' }
                })
                .then(res => res.json())
                .then(data => {
                    btn.textContent = data.attending ? 'Not Attend' : 'Attend';
                })
                .catch(err => console.error(err));
            });
        });
    </script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(function() {
    $(".attendBtn").click(function(e) {
        e.preventDefault();
        let btn = $(this);
        let talkId = btn.data("talk-id");

        $.post("/talk/" + talkId + "/attend")
            .done(function(data) {
                if (data.attending) {
                    btn.text("Not Attend");
                    btn.css("background", "#dc3545"); // red background

                } else {
                    btn.text("Attend");
                    btn.css("background", "linear-gradient(45deg, #6a11cb, #2575fc)"); // blue-purple gradient

                }
            })
            .fail(function() {
                alert("Error toggling attendance. Try again.");
            });
    });
});
</script>
</body>
</html>