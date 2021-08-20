<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bands')->insert([
            'id' => Str::uuid(),
            'name' => 'Ozzy Osbourne',
            'debut' => 1979,
            'description' => 'In late 1979, under the management of the Ardens, Osbourne formed the Blizzard of Ozz,[50] featuring drummer Lee Kerslake (of Uriah Heep), bassist-lyricist Bob Daisley (of Rainbow and later Uriah Heep), keyboardist Don Airey (of Rainbow, and later Deep Purple), and guitarist Randy Rhoads (of Quiet Riot).',
        ]);
    }
}
