<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8" />
  <title>Omikuji Fortune Form</title>
  <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
  <style>
    /* Custom font for elegance */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    body {
      font-family: 'Poppins', sans-serif;
    }
  </style>
</head>
<body class="bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-700 min-h-screen flex items-center justify-center px-6 py-16">

  <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl max-w-lg w-full p-10 relative overflow-hidden">
    
    <!-- Decorative circles -->
    <div class="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-tr from-pink-400 to-purple-600 rounded-full opacity-30 animate-pulse"></div>
    <div class="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-tr from-indigo-400 to-purple-600 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>

    <h1 class="text-4xl font-extrabold text-indigo-900 mb-8 text-center tracking-wide drop-shadow-md">
      🍀 Your Omikuji Fortune
    </h1>
	<form action="/omikuji/process" method="post" class="space-y-8 max-w-lg mx-auto">
	  <!-- Use a grid with 2 columns: label + input -->
	  
	  <div class="grid grid-cols-3 items-center gap-6">
	    <label for="number" class="text-indigo-900 font-semibold text-lg text-right pr-4">
	      Number of Years
	    </label>
	    <input type="number" id="number" name="number" min="5" max="25" required
	      placeholder="Enter a number"
	      class="col-span-2 rounded-xl border-2 border-indigo-300 px-5 py-3 text-indigo-900 placeholder-indigo-400 shadow-md
	             transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-600 w-full" />
	  </div>

	  <div class="grid grid-cols-3 items-center gap-6">
	    <label for="city" class="text-indigo-900 font-semibold text-lg text-right pr-4">
	      City
	    </label>
	    <input type="text" id="city" name="city" required
	      placeholder="Your favorite city"
	      class="col-span-2 rounded-xl border-2 border-indigo-300 px-5 py-3 text-indigo-900 placeholder-indigo-400 shadow-md
	             transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-600 w-full" />
	  </div>

	  <div class="grid grid-cols-3 items-center gap-6">
	    <label for="person" class="text-indigo-900 font-semibold text-lg text-right pr-4">
	      Person's Name
	    </label>
	    <input type="text" id="person" name="person" required
	      placeholder="Someone special"
	      class="col-span-2 rounded-xl border-2 border-indigo-300 px-5 py-3 text-indigo-900 placeholder-indigo-400 shadow-md
	             transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-600 w-full" />
	  </div>

	  <div class="grid grid-cols-3 items-center gap-6">
	    <label for="hobby" class="text-indigo-900 font-semibold text-lg text-right pr-4">
	      Hobby
	    </label>
	    <input type="text" id="hobby" name="hobby" required
	      placeholder="Your favorite hobby"
	      class="col-span-2 rounded-xl border-2 border-indigo-300 px-5 py-3 text-indigo-900 placeholder-indigo-400 shadow-md
	             transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-600 w-full" />
	  </div>

	  <div class="grid grid-cols-3 items-center gap-6">
	    <label for="thing" class="text-indigo-900 font-semibold text-lg text-right pr-4">
	      Thing
	    </label>
	    <input type="text" id="thing" name="thing" required
	      placeholder="A special thing"
	      class="col-span-2 rounded-xl border-2 border-indigo-300 px-5 py-3 text-indigo-900 placeholder-indigo-400 shadow-md
	             transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-600 w-full" />
	  </div>

	  <div class="grid grid-cols-3 items-start gap-6">
	    <label for="comment" class="text-indigo-900 font-semibold text-lg text-right pr-4 pt-2">
	      Comment
	    </label>
	    <textarea id="comment" name="comment" rows="4" required
	      placeholder="Any thoughts?"
	      class="col-span-2 rounded-xl border-2 border-indigo-300 px-5 py-3 text-indigo-900 placeholder-indigo-400 shadow-md resize-none
	             transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-600 w-full"></textarea>
	  </div>

	  <button type="submit"
	    class="w-full bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-800 text-white font-extrabold py-4 rounded-3xl shadow-lg
	           hover:from-indigo-800 hover:via-pink-700 hover:to-purple-700 transition duration-500 mt-6">
	    Reveal My Fortune
	  </button>
	</form>
      </form>
  </div>
</body>
</html>