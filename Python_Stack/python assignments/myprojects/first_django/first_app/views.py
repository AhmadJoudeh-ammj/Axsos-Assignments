from django.shortcuts import render , redirect , HttpResponse

def root(request):
    return redirect ('blogs')

def index(request):
    return HttpResponse("placeholder to later display a list of all blogs")

def new (request):
    return HttpResponse ("placeholder to display a new form to create a blog")

def create (request):
    return redirect ('/blogs')

def numbers (request ,number):
    return HttpResponse (f"placeholder to display blog {number}")

def edit (request ,number):
    return HttpResponse (f"placeholder to edit blog {number}")

def destroy (request,number):
    return redirect ('/blogs')