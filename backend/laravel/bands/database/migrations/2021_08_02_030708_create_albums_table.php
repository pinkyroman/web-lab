<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlbumsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('albums', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';

            $table->string('id', 128);
            $table->string('bandId', 128);
            $table->string('title', 128);
            $table->smallInteger('released', false, true);
            $table->text('description');
            $table->timestampsTz();

            $table->primary(['bandId', 'id']);
            $table->unique(['bandId', 'id', 'title'], 'title_with_ids'); // Unique Index
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('albums');
    }
}
