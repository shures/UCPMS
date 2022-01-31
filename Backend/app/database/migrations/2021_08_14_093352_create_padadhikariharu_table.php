<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePadadhikariharuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('padadhikariharu', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('record_id');
            $table->integer('pada_id')->unsigned();
            $table->string('name');
            $table->string('thegana');
            $table->string('na_na');
            $table->string('jilla');
            $table->foreign('pada_id')->references('id')->on('padadhikari_pada_options');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('padadhikariharu');
    }
}
