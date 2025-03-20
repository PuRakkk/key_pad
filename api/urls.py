from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, BranchViewSet, StaffViewSet, TransactionHistoryViewSet, AssignBranchesViewSet, StaticPaymentViewSet, BotUsersStorageViewSet, BankCredentialsViewSet
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from .views import fetch_all_users


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'branches', BranchViewSet)  
router.register(r'staff', StaffViewSet, basename='staff')
router.register(r'transactions', TransactionHistoryViewSet)
router.register(r'assign-branches', AssignBranchesViewSet, basename='assign-branches')
router.register(r'static-payment',StaticPaymentViewSet ,basename='static-payment')
router.register(r'bot-users',BotUsersStorageViewSet, basename='bot-users')
router.register(r'bank-credentials',BankCredentialsViewSet, basename='bank-credentials')


schema_view = get_schema_view(
    openapi.Info(
        title="KEYPAD API Documentation",
        default_version='v1',
        description="KEYPAD API documentation",
    ),
    public=True,
    permission_classes=[],
)

urlpatterns = [
    path('api/v1/check_login/', views.check_login, name='check_login'),
    path('api/v1/', include(router.urls)),
    path('api/v1/get-users/', fetch_all_users, name='fetch_all_users'),
    path('api/v1/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/check_token_status/', views.check_token_status, name='check_token_status'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    ]

