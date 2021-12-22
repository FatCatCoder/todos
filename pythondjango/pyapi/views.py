from django.shortcuts import render
from rest_framework import generics
from .serializer import TodoSerializer
from .models import Todo

# Create your views here.

# Showing the List
class ListTodo(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

# fetching single todo
class DetailTodo(generics.RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

# creating one
class CreateTodo(generics.CreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer