<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSongsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('songs', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';

            $table->string('id', 128);
            $table->string('albumId', 128);
            $table->string('bandId', 128);
            $table->string('title', 128);
            $table->smallInteger('playTime', false, true);
            $table->timestampsTz();

            $table->primary(['bandId', 'albumId', 'id']);
            $table->unique(['bandId', 'albumId', 'id', 'title'], 'title_with_ids'); // Unique Index
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('songs');
    }
}
