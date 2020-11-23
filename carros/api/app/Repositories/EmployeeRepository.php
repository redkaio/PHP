<?php

namespace App\Repositories;

class EmployeeRepository
{

    function save($employee)
    {
        $employee->save();
        return $employee;
    }

    function delete($employee)
    {
        $employee->delete();
        return $employee;
    }
}
