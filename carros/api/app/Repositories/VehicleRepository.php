<?php

namespace App\Repositories;

class VehicleRepository
{

    function save($auto)
    {
        $auto->save();
        return $auto;
    }

    function delete($auto)
    {
        $auto->delete();
        return $auto;
    }
}
