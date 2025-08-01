from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard_view, name='dashboard'),
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('create-project/', views.create_project_view, name='create_project'),
    path('project/<int:project_id>/', views.project_detail_view, name='project_detail'),
    path('project/<int:project_id>/edit/', views.edit_project_view, name='edit_project'),
    path('project/<int:project_id>/delete/', views.delete_project_view, name='delete_project'),
]

