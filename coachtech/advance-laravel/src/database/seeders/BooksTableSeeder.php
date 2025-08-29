<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BooksTableSeeder extends Seeder
{
    public function run()
    {
        // Tony (id=1) の本
        $param = [
            'author_id' => 1,
            'title' =>'桃太郎',
        ];
        DB::table('books')->insert($param);

        $param = [
            'author_id' => 3,
            'title' => '白雪姫',
        ];
        DB::table('books')->insert($param);

        // Sara (id=3) の本
        $param = [
            'author_id' => 3,
            'title' => 'シンデレラ',
        ];
        DB::table('books')->insert($param);

        $param = [
            'author_id' => 3,
            'title' => 'マッチうりの少女',
        ];
        DB::table('books')->insert($param);

        $param = [
            'author_id' => 3,
            'title' => '３匹の子ぶた',
        ];
        DB::table('books')->insert($param);
    }
}
