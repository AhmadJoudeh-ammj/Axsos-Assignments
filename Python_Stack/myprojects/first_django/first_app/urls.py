from django.urls import path
from . import views

urlpatterns = [
    path('',views.root),
    path('blogs' , views.index) ,
    path ('blogs/new', views.new),
    path ('blogs/<int:number>', views.numbers),
    path ('blogs/edit<int:number>' ,views.edit) ,
    path ('blogs/<int:number>/delete', views.destroy), 
]