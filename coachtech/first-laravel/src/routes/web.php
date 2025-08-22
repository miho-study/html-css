<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\HelloController;
use App\Http\Controllers\MiddlewareController;

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

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [TestController::class, 'index']);
Route::post('/', [TestController::class, 'post']);
Route::get('/middleware', [MiddlewareController::class, 'index']);
Route::post('/middleware', [MiddlewareController::class, 'post']);

// Route::get('/test', [TestController::class, 'index']);
// Route::get('/test/{text?}', [TestController::class, 'index']);
// Route::get('/test/{greeting?}',function($greeting = 'Goodmorning'){return $greeting . '=おはようございます';});
// Route::get('/test/{room}/{id}', function ($room, $id) {
//     return 'roomが' . $room . 'でidは' . $id . 'です';
//   });
// Route::get('/hello', [HelloController::class, 'index']);
