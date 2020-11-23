<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Branch;
use Faker\Generator as Faker;

$factory->define(Branch::class, function (Faker $faker) {
    return [
        'name' => $this->faker->company,
        'ie' => $this->faker->numberBetween(0, 999999999),
        'cnpj' => $this->faker->numberBetween(0, 99999999999999),
        'address_id' => factory(\App\Models\Address::class)
    ];
});
