<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('records', function (Blueprint $table) {
            $table->id();
            $table->text('upabhokta_samitiko_naam');
            $table->string('upabokta_samitiko_thegana');
            $table->string('aayojanako_naam');
            $table->string('aayojanako_sthal');
            $table->string('aayojanako_udeshya');
            $table->date('aayojana_suru_miti');
            $table->bigInteger('lagat_anuman');
            $table->bigInteger('lagat_behorne_karyalay');
            $table->bigInteger('lagat_behorne_upobhokta_samiti');
            $table->integer('lagat_behorne_anne_option');
            $table->bigInteger('lagat_behorne_anne');

            $table->string('aayojana_labhanbit_gharpariwar_sangkhya');
            $table->string('aayojana_labhanbit_janasankhya');
            $table->string('aayojana_labhanbit_sangathit_sangkhya');
            $table->string('aayojana_labhanbit_anne');
            $table->date('gathan_vayeko_miti');

            $table->string('upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya');
            $table->string('anubhav_barsa');

            $table->string('yojana_marmat_jimma_line_samiti');
            $table->string('marmat_sambhabit_srot');
            $table->string('janasramdan');
            $table->string('sewa_sulka');
            $table->string('dastur_chandabata');
            $table->string('anne_kehi_vaye');
            $table->date('aayojana_ante_miti');
            $table->string('aayojana_hune_woda');
            $table->integer('pramukha_prashasakiyeko_name');
            $table->string('adaxyako_number');
            $table->string('kaifiyet');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('records');
    }
}
