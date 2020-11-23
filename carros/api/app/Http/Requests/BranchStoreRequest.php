<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BranchStoreRequest extends FormRequest
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
            'ie' => 'required | size:9',
            'cnpj' => 'required | size:14',
            'street' => 'required',
            'number' => 'required',
            'district' => 'required',
            'state' => 'required | size:2',
            'cep' => 'required | size: 8',
        ];
    }
}
