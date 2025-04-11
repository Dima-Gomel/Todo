from django.db import models
from django.utils import timezone


class Todo(models.Model):
    objects = None
    title = models.CharField(
        max_length=200,
        verbose_name="Название задачи",
    )
    description = models.TextField(
        blank=True,
        null=True,
        verbose_name="Описание",
    )
    date = models.DateTimeField(
        verbose_name="Дата создания",
        default=timezone.now,
    )
    isDone = models.BooleanField(
        default=False,
        verbose_name="Выполнено",
    )

    def __str__(self):
        return self.title
