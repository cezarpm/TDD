from django.shortcuts import render

# Create your views here.

def home(request):
    context = {
        'nome': 'Jorge'
    }
    return render(request, 'home.html', context)
