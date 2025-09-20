from django.shortcuts import render, redirect

def index(request):
    if not request.user.is_authenticated: 
        return redirect("login")
    return render(request, "index.html")

def login_view(request):
    return render(request, "login.html", {"title":"Login"})

def register(request):
    return render(request, "register.html",{"title":"Register"})
