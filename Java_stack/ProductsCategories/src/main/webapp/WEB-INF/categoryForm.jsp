<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Create Category</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-5">

    <h2 class="mb-4">Create a New Category</h2>

    <form action="/categories" method="post">
        <div class="mb-3">
            <label for="name" class="form-label">Category Name</label>
            <input type="text" id="name" name="name" class="form-control" required>
        </div>

        <button type="submit" class="btn btn-success">Save Category</button>
    </form>

    <a href="/" class="btn btn-link mt-3">← Back to Home</a>

</body>
</html>