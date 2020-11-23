<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Services\EmployeeService;
use App\Http\Requests\EmployeeStoreRequest;
use App\Http\Requests\EmployeeUpdateRequest;
use Illuminate\Support\Facades\Hash;

class EmployeeController extends Controller
{

    public function __construct(EmployeeService $service)
    {
        $this->service = $service;
        $this->middleware('auth:employee');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Employee::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmployeeStoreRequest $request)
    {
        try {
            $employee = $this->service->createEmployee($request);
            $employee->address;
            return $employee;
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
        $employee = Employee::find($id);
        if($employee){
            $employee->branch;
            $employee->address;
            return response()->json($employee, 200);
        }
        return response()->json(['erro' => 'Funcionário não encontrado'], 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EmployeeUpdateRequest $request, $id)
    {
        try {
            $employee = $this->service->editEmployee($request, $id);
            $employee->adress;
            return $employee;
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
            return $this->service->deleteEmployee($id);
        } catch(\Throwable $th){
            echo $th;
        }
    }
}
