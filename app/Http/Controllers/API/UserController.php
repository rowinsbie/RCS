<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdateRequest;

use App\Models\User;
use Hash;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Response()->json([
            'users'=>User::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        try
        {
            $request['nominated_password'] = Hash::make($request['nominated_password']);
            $request['confirmed_password'] = Hash::make($request['confirmed_password']);

            $isCreated = User::create($request->all());
            if($isCreated)
            {
                return Response()->json($isCreated);
            }
        } catch(Exception  $e)
        {
            return $e->getMessage();
        }
       
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // check user existence
        $user = User::find($id);
        if(!$user)
        {
            return abort(404);
        }

        return Response()->json([
            'user'=>$user
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserUpdateRequest $request, $id)
    {
        $user = User::find($id);
        if(!$user)
        {
            abort(404);
        }

        if(!$user->update([
            'fullname'=>$request['fullname'],
            'email'=>$request['email'],
            'role_id'=>$request['role_id'],
        ]))
        {
            abort(500,"something went wrong");
        }

        return Response()->json([
            'message'=>"User has been updated"
        ]);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if(!$user)
        {
            abort(404);
        }

        if(!$user->delete())
        {
            abort(500,"something went wrong");
        }

        return Response()->json([
            'message'=>"User has been deleted"
        ]);
    }
}
