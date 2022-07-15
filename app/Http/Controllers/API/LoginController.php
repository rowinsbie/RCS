<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\User;
class LoginController extends Controller
{
    public function Login(Request $request)
    {
        if(!Auth::attempt($request->only(['email','password'])))
        {
            return response()->json([
                'message'=>"Username or password is incorrect"
            ],422);
        }

        $user = User::where('email',$request['email'])->first();
        $token = $user->createToken($user->id)->plainTextToken;
        return response()->json([
            'uid'=>$user->id,
            'token'=>$token
        ]);
    }

    public function Logout(Request $request)
    {

    }
}
