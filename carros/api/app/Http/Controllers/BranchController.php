<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Services\BranchService;
use App\Http\Requests\BranchStoreRequest;
use App\Http\Requests\BranchUpdateRequest;

class BranchController extends Controller
{

    public function __construct(BranchService $service)
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
        return response()->json(Branch::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BranchStoreRequest $request)
    {
        try {
            $branch = $this->service->createBranch($request);
            $branch->address;
            return $branch;
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
        $branch = Branch::Find($id);
        if ($branch) {
            $branch->address;
            return response()->json($branch, 200);
        }
        return response()->json(['erro' => 'Filial não encontrada'], 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BranchUpdateRequest $request, $id)
    {
        try {
            $branch = $this->service->editBranch($request, $id);
            $branch->address;
            return $branch;
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
            return $this->service->deleteBranch($id);
        } catch(\Throwable $th){
            echo $th;
        }
    }
}
