<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKistakoBiwaranTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kistako_biwaran', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('record_id');
            $table->date('pratham_miti');
            $table->string('pratham_rakam');
            $table->string('pratham_samagriko_pariman');
            $table->string('pratham_kaifiyet');
            $table->date('dorshro_miti');
            $table->string('dorshro_rakam');
            $table->string('dorshro_samagriko_pariman');
            $table->string('dorshro_kaifiyet');
            $table->date('teshro_miti');
            $table->string('teshro_rakam');
            $table->string('teshro_samagriko_pariman');
            $table->string('teshro_kaifiyet');
            $table->date('jamma_miti');
            $table->string('jamma_rakam');
            $table->string('jamma_samagriko_pariman');
            $table->string('jamma_kaifiyet');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kistako_biwaran');
    }
}
