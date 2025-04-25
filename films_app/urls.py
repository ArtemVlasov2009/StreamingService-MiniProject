from .views import *
from django.urls import path

urlpatterns = [
    path('all/', render_all_films, name = 'all_films'),
    path('add-to-favourites/<film_pk>', add_to_favourite, name = 'add_to_favourite'),
    path('favourites/', render_favourite_films, name= 'favourites'),
    path('filter/', get_by_filter, name='filter_films'),
    path('films/', get_by_filter, name='film_list'),
    path('films/filter/', get_by_filter, name='filter_films'),
]