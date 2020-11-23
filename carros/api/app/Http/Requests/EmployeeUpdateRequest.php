<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeUpdateRequest extends FormRequest
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
            'cpf' => 'size:11',
            'birth' => 'date',
            'gender' => 'size:1',
            'situation' => 'size:1',
            'state' => 'size:2',
            'cep' => 'size: 8',
            'branch_id' => 'exists:branches,id'
        ];
    }
}
