<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class VehicleUpdateRequest extends FormRequest
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
            'year' => 'integer | min: 1900',
            'vim' => 'size:17',
            'category' => Rule::in(['entrada','hatch pequeno','hatch médio', 'sedã médio', 'sedã grande', 'SUV',  'pick-ups']),
            'branch_id' => 'exists:branches,id'
        ];
    }
}
