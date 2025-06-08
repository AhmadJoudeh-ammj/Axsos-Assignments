<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8" />
  <title>Your Omikuji Fortune</title>
  <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    body {
      font-family: 'Poppins', sans-serif;
    }
  </style>
</head>
<body class="bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-700 min-h-screen flex items-center justify-center px-6 py-16">
  <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl max-w-4xl w-full p-12 relative overflow-hidden">
    <div class="absolute -top-20 -left-20 w-52 h-52 bg-gradient-to-tr from-pink-600 to-indigo-700 rounded-full opacity-30 animate-pulse"></div>
    <div class="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-tr from-indigo-600 to-purple-700 rounded-full opacity-25 animate-pulse animation-delay-1000"></div>

    <h1 class="text-5xl font-extrabold text-indigo-900 mb-12 text-center tracking-wide drop-shadow-md">
      🎉 Your Omikuji Fortune 🎉
    </h1>
    
    <p class="text-2xl text-indigo-900 leading-relaxed mb-12 max-w-3xl mx-auto text-center">
      In <span class="font-bold text-pink-600">${sessionScope.number}</span> years, you will live in
      <span class="font-bold text-pink-600">${sessionScope.city}</span> with
      <span class="font-bold text-pink-600">${sessionScope.person}</span> as your roommate,
      doing <span class="font-bold text-pink-600">${sessionScope.hobby}</span> for a living.
      The next time you see a <span class="font-bold text-pink-600">${sessionScope.thing}</span>,
      you will have good luck.<br />
      Also: <em class="italic text-purple-400">${sessionScope.comment}</em>
    </p>

    <div class="text-center">
      <a href="/omikuji"
         class="inline-block px-14 py-4 bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-800 text-white rounded-3xl font-extrabold shadow-lg
                hover:from-indigo-800 hover:via-pink-700 hover:to-purple-700 transition duration-500">
         Try Again
      </a>
    </div>
  </div>
</body>
</html>