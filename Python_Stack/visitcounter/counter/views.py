from django.shortcuts import render , redirect

def index(request):
        visits = request.session.get('visits', 0)
        request.session['visits'] = visits + 1
        return render(request, 'counter/index.html', {'visits': visits + 1})

def destroy_session(request):
        request.session.flush()
        return redirect ('index')
        