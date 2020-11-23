<?php

use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/', function() {
    return response()->json(['message' => 'CarrosAPI', 'status' => 'Connected']);
});

Route::resource('branch', 'BranchController')->except("create", "edit");
Route::resource('employee', 'EmployeeController')->except("create", "edit");
Route::resource('vehicle', 'VehicleController')->except("create", "edit");
Route::post('login', 'AuthController@login');
