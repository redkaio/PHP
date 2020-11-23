<?php

namespace App\Services;

use App\Models\Vehicle;
use App\Models\Address;
use App\Models\Branch;
use App\Models\Employee;
use App\Repositories\BranchRepository;
use App\Repositories\AddressRepository;

class BranchService
{

    public function __construct(BranchRepository $branchRepository, AddressRepository $addressRepository){
        $this->branchRepository=$branchRepository;
        $this->addressRepository=$addressRepository;
    }

    function createBranch($request)
    {
        try{
            $branch = new Branch();
            $address = new Address();
            $address = $this->createAddress($request);
            $branch->fill($request->all());
            $branch->address_id = $address->id;
            $branch = $this->branchRepository->save($branch);
            return $branch;
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

    function editBranch($request, $id)
    {
        try{
            $branch = Branch::find($id);
            $address = Address::find($branch->address_id);
            $branch->fill($request->all());
            $address->fill($request->all());
            $address = $this->addressRepository->save($address);
            $branch = $this->branchRepository->save($branch);
            return $branch;
        }catch(\Throwable $th){
            echo $th;
        }
    }

    function deleteBranch($id)
    {
        try{
            if (Employee::where('branch_id', $id)->get()->count() > 0 or Vehicle::where('branch_id', $id)->get()->count() > 0) {
                return response()->json(['erro' => 'Favor desvincular todos os automoveis e funcionarios da branch antes da remoção'], 409);
            } else {
                $branch = Branch::find($id);
                $address = Address::find($branch->address_id);
                $branch = $this->branchRepository->delete($branch);
                $address = $this->addressRepository->delete($address);
                return $branch;
            }
            
            
        }catch(\Throwable $th){
            echo $th;
        }
    }
}
