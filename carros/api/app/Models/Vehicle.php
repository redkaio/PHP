<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $fillable = ['name', 'model', 'year', 'color', 'vim', 'category', 'branch_id'];
    public function branch()
    {
        return $this->belongsTo('App\Models\Branch');
    }
}
