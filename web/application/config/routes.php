<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['default_controller'] = 'DashboardController';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['printsession'] = 'AdminController/printsession';

$route['register'] = 'RegisterController';
$route['register/usernamecheck'] = 'RegisterController/usernamecheck';

$route['test'] = 'DashboardController';
$route['artikel'] = 'DashboardController/artikel';
$route['artikel/(:any)'] = 'DashboardController/artikel/$1';

$route['search/(:any)'] = 'DashboardController/search/$1';

$route['admin'] = 'ReviewController';
$route['admin/login'] = 'AdminController/login';
$route['admin/logout'] = 'AdminController/logout';
$route['admin/review'] = 'ReviewController';
$route['admin/komentar'] = 'KomentarController';
$route['admin/rating'] = 'ReviewController/rating';
$route['admin/artikel'] = 'ArtikelController';