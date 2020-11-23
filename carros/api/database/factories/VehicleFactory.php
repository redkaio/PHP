<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Vehicle;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

$factory->define(Vehicle::class, function (Faker $faker) {

    $branch_id = 0;
    if ((rand(0,20) > 7) and (DB::table('branches')->get()->count() > 0)) {
        $branch_id = rand( 1, (DB::table('branches')->get()->count()-1) );
    }
    else {
        $branch_id = factory(\App\Models\Branch::class);
    }
    return [
        'name' => $this->faker->word,
        'model' => $this->faker->word,
        'year' => $this->faker->year,
        'color' => $this->faker->colorName,
        'vim' => Str::random(17),
        'category' => $this->faker->randomElement($array = array ('entrada','hatch pequeno','hatch médio', 'sedã médio', 'sedã grande', 'SUV',  'pick-ups')),
        'branch_id' => $branch_id,
    ];
});
