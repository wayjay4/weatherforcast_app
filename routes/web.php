<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Weatherforcast\WeatherforcastController;

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
    return view('welcome');
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');


// route for weatherforcast
Route::any('weatherforcast', [WeatherforcastController::class, 'weatherforcast'])
    ->name('weatherforcast')
    ->middleware(['auth:sanctum', 'verified']);

// route to work with react requests
Route::any('weatherforcast/{any}', [WeatherforcastController::class, 'weatherforcast'])
    ->where('any', '.*')
    ->middleware(['auth:sanctum', 'verified']);
