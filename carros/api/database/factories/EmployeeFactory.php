<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Employee;
use Carbon\Carbon;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

$factory->define(Employee::class, function (Faker $faker) {
    $faker->addProvider(new \Faker\Provider\pt_BR\Person($faker));
    $branch_id = 0;
    if ((rand(0,20) > 7) and (DB::table('branches')->get()->count() > 0)) {
        $branch_id = rand( 1, (DB::table('branches')->get()->count()-1) );
    }
    else {
        $branch_id = factory(\App\Models\Branch::class);
    }

    return [
        'name' => $this->faker->name,
        'cpf' => $this->faker->cpf(false),
        'birth' => Carbon::parse($this->faker->date('Y-m-d', 'now')),
        'gender' => $this->faker->randomElement(['M','F']),
        'role' => $this->faker->randomElement(['Funcionario','Gerente']),
        'salary' => $this->faker->randomFloat(NULL, 500, 10000) ,
        'password' => Hash::make('123456'),
        'situation' => $this->faker->randomElement(['A','I']),
        'address_id' => factory(\App\Models\Address::class),
        'branch_id' => $branch_id
    ];
});
