<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
             "fullname"=>"required|unique:users",
             "email"=>"required|unique:users|email:rfc,dns",
             "nominated_password"=>"required|min:8",
             "confirmed_password"=>"required|same:nominated_password",
             "role_id"=>"required"
        ];
    }
}
