<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController\UserController;
use App\Http\Controllers\ContentController\ProjectDataController;
use App\Http\Controllers\ContentController\ProjectOptionController;
use App\Http\Controllers\ContentController\Setting;

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
Route::post("put_option",[ProjectOptionController::class,'put_option']);
Route::post("getOptionRecord",[ProjectOptionController::class,'getOptionRecord']);
Route::post("getProject",[ProjectDataController::class,'getProject']);
Route::post("getOptions",[ProjectOptionController::class,'getOptions']);
Route::post("deleteDetail",[ProjectOptionController::class,'deleteDetail']);
Route::post("searchProject",[ProjectDataController::class,'searchProject']);
Route::post("getSifaris",[ProjectDataController::class,'getSifaris']);
Route::post("getProjects",[ProjectDataController::class,'getProjects']);
Route::post("getBarChart",[ProjectDataController::class,'getBarChart']);
Route::post("getMunReport",[ProjectDataController::class,'getMunReport']);
Route::post("getWardReport",[ProjectDataController::class,'getWardReport']);
Route::post("putSetting",[ProjectOptionController::class,'putSetting']);
Route::post("getProgressReport",[ProjectDataController::class,'getProgressReport']);
Route::post("getSetting",[Setting::class,'getSetting']);
