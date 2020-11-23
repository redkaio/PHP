<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;


class Employee extends Authenticatable implements JWTSubject
{
    protected $fillable = ['name', 'cpf', 'birth', 'gender', 'role', 'salary', 'password', 'situation', 'address_id', 'branch_id'];
    protected $hidden = ['password'];

    public function address()
    {
        return $this->belongsTo('App\Models\Address');
    }

    public function branch()
    {
        return $this->belongsTo('App\Models\Branch');
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

}
