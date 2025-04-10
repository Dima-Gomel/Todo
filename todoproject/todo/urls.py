from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TodoViewSet

router = DefaultRouter()
router.register(r'todos', TodoViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    # path('api/todos/', ToddListCreateView.as_view(), name='todo-list-create'),
    # path('api/todos/<int:pk>/', ToddListCreateView.as_view(), name='todo-detail'),
]
