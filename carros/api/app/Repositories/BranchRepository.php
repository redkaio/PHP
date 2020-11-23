<?php

namespace App\Repositories;

class BranchRepository
{

    function save($branch)
    {
        $branch->save();
        return $branch;
    }

    function delete($branch)
    {
        $branch->delete();
        return $branch;
    }
}
