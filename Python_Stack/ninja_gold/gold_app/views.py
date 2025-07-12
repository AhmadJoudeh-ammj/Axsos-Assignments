from django.shortcuts import render, redirect
from django.utils import timezone
import random

def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
    if 'activities' not in request.session:
        request.session['activities'] = []

    context = {
        'locations': ['farm', 'cave', 'house', 'quest']
    }
    return render(request, 'index.html', context)

def process_money(request):
    if request.method == 'POST':
        location = request.POST['location']
        gold_earned = 0
        activity = ''
        time = timezone.now().strftime("%B %d %Y %I:%M %p")

        if location in ['farm', 'cave', 'house']:
            gold_earned = random.randint(10, 20)
        elif location == 'quest':
            gold_earned = random.randint(-50, 50)

        request.session['gold'] += gold_earned

        if gold_earned >= 0:
            activity = f"You entered a {location} and earned {gold_earned} gold. ({time})"
            color = 'green'
        else:
            activity = f"You failed a quest and lost {abs(gold_earned)} gold. ({time})"
            color = 'red'

        request.session['activities'].insert(0, {'text': activity, 'color': color})
        request.session.modified = True

    return redirect('/')