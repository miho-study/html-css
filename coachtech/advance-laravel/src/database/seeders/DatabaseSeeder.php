<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Person;

class DatabaseSeeder extends Seeder

{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        // $this->call(AuthorsTableSeeder::class);
    //     $this->call(BooksTableSeeder::class);
    Person::factory(10)->create();
    }
}
