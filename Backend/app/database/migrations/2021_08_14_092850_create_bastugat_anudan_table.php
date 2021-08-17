<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBastugatAnudanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bastugat_anudan', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('record_id');
            $table->string('bastugat_anudan_sangbata_samagriko_naam');
            $table->string('bastugat_anudan_sangbata_ekai');
            $table->string('bastugat_anudan_pradeshbata_samagriko_naam');
            $table->string('bastugat_anudan_pradeshbata_ekai');
            $table->string('bastugat_anudan_sthaniyebata_samagriko_naam');
            $table->string('bastugat_anudan_sthaniyebata_ekai');
            $table->string('bastugat_anudan_gairasarakaribata_samagriko_naam');
            $table->string('bastugat_anudan_gairasarakaribata_ekai');
            $table->string('bastugat_anudan_bideshbata_samagriko_naam');
            $table->string('bastugat_anudan_bideshbata_ekai');
            $table->string('bastugat_anudan_upobhoktasamitibata_samagriko_naam');
            $table->string('bastugat_anudan_upokhoktasamitibata_ekai');
            $table->string('bastugat_anudan_anne_samagriko_naam');
            $table->string('bastugat_anudan_anne_ekai');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bastugat_anudan');
    }
}
