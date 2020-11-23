<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class VehicleStoreRequest extends FormRequest
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
            'model' => 'required',
            'year' => 'required | integer | min:1900',
            'color' => 'required',
            'vim' => 'required | size:17',
            'category' => ['required', Rule::in(['entrada','hatch pequeno','hatch médio', 'sedã médio', 'sedã grande', 'SUV',  'pick-ups'])],
            'branch_id' => 'required | exists:branches,id'
        ];
    }
}
