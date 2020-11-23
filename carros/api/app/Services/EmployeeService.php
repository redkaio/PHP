<?php

namespace App\Services;

use App\Models\Address;
use App\Models\Employee;
use App\Repositories\EmployeeRepository;
use App\Repositories\AddressRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class EmployeeService
{

    public function __construct(EmployeeRepository $employeeRepository, AddressRepository $addressRepository){
        $this->employeeRepository=$employeeRepository;
        $this->addressRepository=$addressRepository;
    }

    function createEmployee($request)
    {
        try{
            $password = Str::random(6);
            $employee = new Employee();
            $address = new Address();
            $address = $this->createAddress($request);
            $employee->fill($request->except('password', 'birth'));
            $employee->password = Hash::make($password);
            $employee->birth = Carbon::parse($request->birth);
            $employee->address_id = $address->id;
            $employee = $this->employeeRepository->save($employee);
            $employee->password = $password;
            return $employee;
        }catch(\Throwable $th){
            echo $th;
        }
    }

    private function createAddress($request)
    {
        try{
            $address = new Address();
            $address->fill($request->all());
            $address = $this->addressRepository->save($address);
            return $address;
        }catch(\Throwable $th){
            echo $th;
        }
    }

    function editEmployee($request, $id)
    {
        try{
            $employee = Employee::find($id);
            $address = Address::find($employee->address_id);
            $employee->fill($request->except('password'));
            $address->fill($request->all());
            $address = $this->addressRepository->save($address);
            $employee = $this->employeeRepository->save($employee);
            return $employee;
        }catch(\Throwable $th){
            echo $th;
        }
    }

    function deleteEmployee($id)
    {
        try{
            $employee = Employee::find($id);
            $address = Address::find($employee->address_id);
            $employee = $this->employeeRepository->delete($employee);
            $address = $this->addressRepository->delete($address);
            return $employee;
        }catch(\Throwable $th){
            echo $th;
        }
    }
}
