from django.contrib import admin
from .models import Todo


@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    # Отображение в списке
    list_display = ('id', 'title', 'description', 'date', 'isDone')
