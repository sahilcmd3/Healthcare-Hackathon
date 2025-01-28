from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponseRedirect

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contracts/', include('contracts.urls')),
    path('', lambda request: HttpResponseRedirect('/api/contracts/')), # Redirect root to contracts
]