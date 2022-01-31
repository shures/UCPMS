<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateYojanaSangkhyaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('yojana_sangkhya', function (Blueprint $table) {
            $table->id();
            $table->string('ward_number');
            $table->integer('yojana_sangkhya');
            $table->string('fy');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('yojana_sangkhya');
    }
}
