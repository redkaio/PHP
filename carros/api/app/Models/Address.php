<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = ['street', 'number', 'district', 'state', 'cep', 'city'];
    public function branch()
    {
        return $this->hasOne('App\Models\Branch');
    }

    public function employee()
    {
        return $this->hasOne('App\Models\Employee');
    }
}
