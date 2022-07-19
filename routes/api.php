<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\API\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function()
{
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
Route::post('log-out',[LoginController::class,"LogOut"]);
Route::apiResource('users',UserController::class);
Route::apiResource('role',RoleController::class);
});


Route::post('authenticate',[LoginController::class,"Login"]);
