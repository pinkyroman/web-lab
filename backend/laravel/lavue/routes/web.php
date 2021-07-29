<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('/vue-form', function () {
    return view('vue-form');
});

Route::get('/blade-form', function() {
    return view('blade-form');
});

Route::get('/curd-form', function() {
    return "UNDER CONSTRUCTION";
    // return view('curd-form');
});
