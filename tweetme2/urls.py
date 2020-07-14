
from django.contrib import admin
from django.urls import path, include
from tweets.views import *
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view),
    path('react/', TemplateView.as_view(template_name='react_via_dj.html')),
    path('createtweets/', tweet_create_view),
    path('tweets/', tweet_list_view),
    #path('api/tweets/<int:tweet_id>/delete', tweet_delete_view),
    #path('api/tweets/action', tweet_action_view),
    path('api/tweets/', include('tweets.urls')),
    path('tweets/<int:tweet_id>', tweet_detail_view),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          documnet_root=settings.STATIC_ROOT)
