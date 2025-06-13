<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Create Product</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-5">

    <h2>Create a New Product</h2>
    <form action="/products" method="post" class="mt-4">
        <div class="mb-3">
            <label class="form-label">Product Name</label>
            <input type="text" name="name" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Save Product</button>
    </form>

    <a href="/" class="btn btn-link mt-3">← Back to Home</a>
</body>
</html>