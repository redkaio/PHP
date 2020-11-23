<?php

namespace App\Repositories;

class AddressRepository
{

    function save($address)
    {
        $address->save();
        return $address;
    }

    function delete($address)
    {
        $address->delete();
        return $address;
    }
}
