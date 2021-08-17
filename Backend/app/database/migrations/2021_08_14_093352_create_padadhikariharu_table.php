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
            $table->string('adaxya_name');
            $table->string('adaxya_thegana');
            $table->string('adaxya_na_number');
            $table->string('adaxya_jilla');
            $table->string('sachib_name');
            $table->string('sachib_thegana');
            $table->string('sachib_na_number');
            $table->string('sachib_jilla');
            $table->string('kosha_name');
            $table->string('kosha_thegana');
            $table->string('kosha_na_number');
            $table->string('kosha_jilla');
            $table->string('sadasshya1_name');
            $table->string('sadasshya1_thegana');
            $table->string('sadasshya1_na_number');
            $table->string('sadasshya1_jilla');
            $table->string('sadasshya2_name');
            $table->string('sadasshya2_thegana');
            $table->string('sadasshya2_na_number');
            $table->string('sadasshya2_jilla');
            $table->string('sadasshya3_name');
            $table->string('sadasshya3_thegana');
            $table->string('sadasshya3_na_number');
            $table->string('sadasshya3_jilla');
            $table->string('sadasshya4_name');
            $table->string('sadasshya4_thegana');
            $table->string('sadasshya4_na_number');
            $table->string('sadasshya4_jilla');
            $table->string('sadasshya5_name');
            $table->string('sadasshya5_thegana');
            $table->string('sadasshya5_na_number');
            $table->string('sadasshya5_jilla');
            $table->string('sadasshya6_name');
            $table->string('sadasshya6_thegana');
            $table->string('sadasshya6_na_number');
            $table->string('sadasshya6_jilla');
            $table->string('sadasshya7_name');
            $table->string('sadasshya7_thegana');
            $table->string('sadasshya7_na_number');
            $table->string('sadasshya7_jilla');
            $table->string('sadasshya8_name');
            $table->string('sadasshya8_thegana');
            $table->string('sadasshya8_na_number');
            $table->string('sadasshya8_jilla');
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
