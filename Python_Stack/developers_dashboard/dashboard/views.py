from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.urls import reverse
from .forms import UserRegistrationForm, UserLoginForm
from .models import Project


def register_view(request):
    """User registration view"""
    if request.user.is_authenticated:
        return redirect('dashboard')
    
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Registration successful!')
            return redirect('dashboard')
    else:
        form = UserRegistrationForm()
    
    return render(request, 'dashboard/register.html', {'form': form})


def login_view(request):
    """User login view"""
    if request.user.is_authenticated:
        return redirect('dashboard')
    
    if request.method == 'POST':
        form = UserLoginForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            messages.success(request, 'Login successful!')
            return redirect('dashboard')
    else:
        form = UserLoginForm()
    
    return render(request, 'dashboard/login.html', {'form': form})


def logout_view(request):
    """User logout view"""
    logout(request)
    messages.success(request, 'You have been logged out successfully!')
    return redirect('login')


@login_required
def dashboard_view(request):
    """Main dashboard view"""
    all_projects = Project.objects.select_related('owner').all()
    
    context = {
        'all_projects': all_projects,
        'user': request.user
    }
    return render(request, 'dashboard/dashboard.html', context)


@login_required
def create_project_view(request):
    """Create new project view"""
    if request.method == 'POST':
        name = request.POST.get('name')
        description = request.POST.get('description')
        start_date = request.POST.get('start_date')
        end_date = request.POST.get('end_date')
        
        # Basic validation
        if not name or len(name) < 3:
            messages.error(request, 'Project name should be at least 3 characters.')
            return render(request, 'dashboard/create_project.html')
        
        if not description:
            messages.error(request, 'Description should not be blank.')
            return render(request, 'dashboard/create_project.html')
        
        if not start_date:
            messages.error(request, 'Start date should be in present.')
            return render(request, 'dashboard/create_project.html')
        
        # Convert date strings to proper format
        from datetime import datetime
        try:
            start_date_obj = datetime.strptime(start_date, '%Y-%m-%d').date()
            end_date_obj = datetime.strptime(end_date, '%Y-%m-%d').date() if end_date else start_date_obj
        except ValueError:
            messages.error(request, 'Invalid date format.')
            return render(request, 'dashboard/create_project.html')
        
        # Create project
        project = Project.objects.create(
            name=name,
            description=description,
            owner=request.user,
            start_date=start_date_obj,
            end_date=end_date_obj
        )
        project.members.add(request.user)
        
        messages.success(request, 'Project created successfully!')
        return redirect('dashboard')
    
    return render(request, 'dashboard/create_project.html')


@login_required
def project_detail_view(request, project_id):
    """Project detail view - accessible to all authenticated users"""
    project = get_object_or_404(Project, id=project_id)
    
    context = {
        'project': project,
        'is_owner': project.owner == request.user,
        'is_member': project.members.filter(id=request.user.id).exists()
    }
    return render(request, 'dashboard/project_detail.html', context)


@login_required
def edit_project_view(request, project_id):
    """Edit project view"""
    project = get_object_or_404(Project, id=project_id)
    
    # Only owner can edit
    if project.owner != request.user:
        messages.error(request, 'Only project owner can edit the project.')
        return redirect('project_detail', project_id=project_id)
    
    if request.method == 'POST':
        name = request.POST.get('name')
        description = request.POST.get('description')
        start_date = request.POST.get('start_date')
        end_date = request.POST.get('end_date')
        
        # Basic validation
        if not name or len(name) < 3:
            messages.error(request, 'Project name should be at least 3 characters.')
            return render(request, 'dashboard/edit_project.html', {'project': project})
        
        if not description:
            messages.error(request, 'Description should not be blank.')
            return render(request, 'dashboard/edit_project.html', {'project': project})
        
        # Update project
        project.name = name
        project.description = description
        project.start_date = start_date
        project.end_date = end_date
        project.save()
        
        messages.success(request, 'Project updated successfully!')
        return redirect('project_detail', project_id=project_id)
    
    context = {'project': project}
    return render(request, 'dashboard/edit_project.html', context)


@login_required
def delete_project_view(request, project_id):
    """Delete project view"""
    project = get_object_or_404(Project, id=project_id)
    
    # Only owner can delete
    if project.owner != request.user:
        messages.error(request, 'Only project owner can delete the project.')
        return redirect('project_detail', project_id=project_id)
    
    project.delete()
    messages.success(request, 'Project deleted successfully!')
    return redirect('dashboard')