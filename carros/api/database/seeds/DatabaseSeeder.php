<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // for ($i = 1; $i <= 10; $i++) {
        //     factory(\App\Models\Funcionario::class)->create();
        //     factory(\App\Models\Carro::class)->create();
        // }

        factory(\App\Models\Employee::class)->times(50)->create();
        factory(\App\Models\Vehicle::class)->times(50)->create();
        
    }
}
