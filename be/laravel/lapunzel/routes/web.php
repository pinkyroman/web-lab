<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiServiceExampleController;

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

Route::get('/modal-example', function () {
    return view('modal-example');
})->name('modal-example');

Route::get('/api-service-example', [ApiServiceExampleController::class,'index'])
    ->name('api-service-example');
