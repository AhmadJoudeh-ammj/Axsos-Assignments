<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Book Manager</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        .books-section, .form-section {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        h1, h2 {
            color: #333;
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
        }
        .books-list {
            list-style: none;
            padding: 0;
        }
        .book-item {
            margin: 15px 0;
            padding: 15px;
            background-color: #f8f9fa;
            border-left: 4px solid #007bff;
            border-radius: 4px;
            transition: transform 0.2s;
        }
        .book-item:hover {
            transform: translateX(5px);
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .book-title {
            font-weight: bold;
            color: #007bff;
            font-size: 1.1em;
            cursor: pointer;
        }
        .book-description {
            color: #666;
            margin-top: 5px;
        }
        .form-group {
            margin: 15px 0;
        }
        .form-group label {
            display: block;
            font-weight: bold;
            color: #555;
            margin-bottom: 5px;
        }
        .form-group input {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
            transition: border-color 0.3s;
        }
        .form-group input:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
        }
        .submit-btn {
            background-color: #007bff;
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        .submit-btn:hover {
            background-color: #0056b3;
        }
        .view-link {
            color: #007bff;
            text-decoration: none;
            font-size: 0.9em;
            margin-left: 10px;
        }
        .view-link:hover {
            text-decoration: underline;
        }
        .no-books {
            text-align: center;
            color: #666;
            font-style: italic;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="books-section">
            <h1>All Books</h1>
            <c:choose>
                <c:when test="${not empty books}">
                    <ul class="books-list">
                        <c:forEach var="book" items="${books}">
                            <li class="book-item">
                                <div class="book-title">${book.title}</div>
                                <div class="book-description">${book.description}</div>
                                <a href="/show/${book.id}" class="view-link">View Details →</a>
                            </li>
                        </c:forEach>
                    </ul>
                </c:when>
                <c:otherwise>
                    <div class="no-books">No books available. Add your first book below!</div>
                </c:otherwise>
            </c:choose>
        </div>

        <div class="form-section">
            <h2>Add New Book</h2>
            <form action="/books" method="POST">
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" required>
                </div>
                
                <div class="form-group">
                    <label for="description">Description:</label>
                    <input type="text" id="description" name="description" required>
                </div>
                
                <div class="form-group">
                    <label for="numberofpages">Number of Pages:</label>
                    <input type="number" id="numberofpages" name="numberofpages" min="1" required>
                </div>
                
                <div class="form-group">
                    <label for="language">Language:</label>
                    <input type="text" id="language" name="language" required>
                </div>
                
                <input type="submit" value="Add Book" class="submit-btn">
            </form>
        </div>
    </div>
</body>
</html>