<?php
namespace App\Http\Controllers\AuthController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|min:6|max:32',
            'password' => 'required|string|min:6|max:32',
        ]);
        if ($validator->fails()) {
            return $validator->errors();
        }else{
            $user= User::where('username', $request->username)->first();
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response(['message' => ['These credentials do not match our records.']], 404);
            }
            $token = $user->createToken('my-app-token')->plainTextToken;
            return response(['user' => $user, 'token' => $token], 201);
        }
    }
    function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:6|max:32',
            'username' => 'required|string|unique:users,username|min:6|max:32',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:6|max:32'
        ]);
        if ($validator->fails()) {
            return $validator->errors();
        }else{
            $user = User::create([
                'name' => $request->name,
                'username' => $request->username,
                'password' => bcrypt($request->password),
                'email' => $request->email
            ]);
            $token = $user->createToken('my-app-token')->plainTextToken;
            return response(['user' => $user, 'token' => $token], 201);
        }
    }
}
