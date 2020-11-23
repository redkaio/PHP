<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeStoreRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'cpf' => 'required | size:11',
            'birth' => 'required | date',
            'gender' => 'required | size:1',
            'role' => 'required',
            'salary' => 'required',
            'situation' => 'required | size:1',
            'street' => 'required',
            'number' => 'required',
            'district' => 'required',
            'state' => 'required | size:2',
            'cep' => 'required | size: 8',
            'branch_id' => 'required | exists:branches,id'
        ];
    }
}
