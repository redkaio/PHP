<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use App\Services\VehicleService;
use App\Http\Requests\VehicleStoreRequest;
use App\Http\Requests\VehicleUpdateRequest;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(VehicleService $service)
    {
        $this->service = $service;
        $this->middleware('auth:employee');
    }

    public function index()
    {
        return response()->json(Vehicle::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(VehicleStoreRequest $request)
    {
        try {
            return $this->service->createAuto($request);
        } catch(\Throwable $th){
            echo $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $vehicle = Vehicle::Find($id);
        if ($vehicle) {
            return response()->json($vehicle, 200);
        }
        return response()->json(['erro' => 'Automóvel não encontrado'], 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(VehicleUpdateRequest $request, $id)
    {
        try {
            return $this->service->editAuto($request, $id);
        } catch(\Throwable $th){
            echo $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            return $this->service->deleteAuto($id);
        } catch(\Throwable $th){
            echo $th;
        }
    }
}
