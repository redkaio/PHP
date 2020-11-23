<?php

namespace App\Services;

use App\Models\Vehicle;
use App\Repositories\VehicleRepository;

class VehicleService
{

    public function __construct(VehicleRepository $repository){
        $this->autoRepository=$repository;
    }

    function createAuto($request)
    {
        try{
            $auto = new Vehicle();
            $auto->fill($request->all());
            $auto = $this->autoRepository->save($auto);
            return $auto;
        }catch(\Throwable $th){
            echo $th;
        }
    }

    function editAuto($request, $id)
    {
        try{
            $auto = Vehicle::find($id);
            $auto->fill($request->all());
            $auto = $this->autoRepository->save($auto);
            return $auto;
        }catch(\Throwable $th){
            echo $th;
        }
    }

    function deleteAuto($id)
    {
        try{
            $auto = Vehicle::find($id);
            $auto = $this->autoRepository->delete($auto);
            return $auto;
        }catch(\Throwable $th){
            echo $th;
        }
    }
}
