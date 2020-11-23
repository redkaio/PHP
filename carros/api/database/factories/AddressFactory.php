<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Address;
use Faker\Generator as Faker;

$factory->define(Address::class, function (Faker $faker) {
    return [
        'street' => $this->faker->streetName,
        'number' => $this->faker->numberBetween(0, 9999),
        'district' => $this->faker->citySuffix,
        'city' => $this->faker->city,
        'state' => $this->faker->stateAbbr,
        'cep' => $this->faker->numberBetween(10000000, 99999999),
    ];
});
