<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    protected $fillable = ['name', 'ie', 'cnpj', 'address_id'];
    public function address()
    {
        return $this->belongsTo('App\Models\Address');
    }

    public function employee()
    {
        return $this->hasMany('App\Models\Employee');
    }

    public function vehicle()
    {
        return $this->hasMany('App\Models\Vehicle');
    }
}
