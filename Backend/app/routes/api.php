<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController\UserController;
use App\Http\Controllers\ContentController\ProjectDataController;
use App\Http\Controllers\ContentController\ProjectOptionController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware' => 'auth:sanctum'], function(){
    //All secure URL's

});
Route::post("login",[UserController::class,'login']);
Route::post("register",[UserController::class,'register']);
Route::post("putData",[ProjectDataController::class,'putData']);
Route::post("put_option_bank",[ProjectOptionController::class,'put_option_bank']);
