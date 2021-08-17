<?php

namespace App\Http\Controllers\ContentController;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class ProjectDataController extends Controller
{
    function putData(Request $request)
    {
        $request->aayojana_suru_miti = Carbon::createFromFormat('Y-m-d', $request->aayojana_suru_miti)->toDateString();
        $request->gathan_vayeko_miti = Carbon::createFromFormat('Y-m-d', $request->gathan_vayeko_miti)->toDateString();
        $request->aayojana_ante_miti = Carbon::createFromFormat('Y-m-d', $request->aayojana_ante_miti)->toDateString();
        $request->pratham_miti = Carbon::createFromFormat('Y-m-d', $request->pratham_miti)->toDateString();
        $request->dorshro_miti = Carbon::createFromFormat('Y-m-d', $request->dorshro_miti)->toDateString();
        $request->teshro_miti = Carbon::createFromFormat('Y-m-d', $request->teshro_miti)->toDateString();
        $request->jamma_miti = Carbon::createFromFormat('Y-m-d', $request->jamma_miti)->toDateString();

        $validator = Validator::make($request->all(), [
            'upabhokta_samitiko_naam'=>'required|string|max:255',
            'upabokta_samitiko_thegana'=>'required|string|max:255',
            'aayojanako_naam'=>'required|string|max:255',
            'aayojanako_sthal'=>'required|string|max:255',
            'aayojanako_udeshya'=>'required|string|max:255',
            'aayojana_suru_miti'=>'required|date|date_format:Y-m-d',
            'lagat_anuman'=>'required|integer' ,
            'lagat_behorne_karyalay'=>'required|integer',
            'lagat_behorne_upobhokta_samiti'=>'required|integer',
            'lagat_behorne_anne'=>'integer',

            'bastugat_anudan_sangbata_samagriko_naam'=>'required|string|max:255',
            'bastugat_anudan_sangbata_ekai'=>'required|string|max:255' ,
            'bastugat_anudan_pradeshbata_samagriko_naam'=>'required|string|max:255',
            'bastugat_anudan_pradeshbata_ekai'=>'required|string|max:255',
            'bastugat_anudan_sthaniyebata_samagriko_naam'=>'required|string|max:255',
            'bastugat_anudan_sthaniyebata_ekai'=>'required|string|max:255',
            'bastugat_anudan_gairasarakaribata_samagriko_naam'=>'required|string|max:255',
            'bastugat_anudan_gairasarakaribata_ekai'=>'required|string|max:255' ,
            'bastugat_anudan_bideshbata_samagriko_naam'=>'required|string|max:255',
            'bastugat_anudan_bideshbata_ekai'=>'required|string|max:255',
            'bastugat_anudan_upobhoktasamitibata_samagriko_naam'=>'required|string|max:255',
            'bastugat_anudan_upokhoktasamitibata_ekai'=>'required|string|max:255',
            'bastugat_anudan_anne_samagriko_naam'=>'required|string|max:255',
            'bastugat_anudan_anne_ekai'=>'required|string|max:255',

            'aayojana_labhanbit_gharpariwar_sangkhya'=>'required|string|max:255',
            'aayojana_labhanbit_janasankhya'=>'required|string|max:255',
            'aayojana_labhanbit_sangathit_sangkhya'=>'string|max:255',
            'aayojana_labhanbit_anne'=>'string|max:255',
            'gathan_vayeko_miti'=>'required|date|date_format:Y-m-d',

            'adaxya_name'=>'required|string|max:255' ,
            'adaxya_thegana'=>'required|string|max:255',
            'adaxya_na_number'=>'required|string|max:255',
            'adaxya_jilla'=>'required|string|max:255' ,
            'sachib_name'=>'string|max:255',
            'sachib_thegana'=>'string|max:255' ,
            'sachib_na_number'=>'string|max:255' ,
            'sachib_jilla'=>'string|max:255' ,
            'kosha_name'=>'string|max:255' ,
            'kosha_thegana'=>'string|max:255',
            'kosha_na_number'=>'string|max:255' ,
            'kosha_jilla'=>'string|max:255' ,
            'sadasshya1_name'=>'string|max:255' ,
            'sadasshya1_thegana'=>'string|max:255',
            'sadasshya1_na_number'=>'string|max:255' ,
            'sadasshya1_jilla'=>'string|max:255' ,
            'sadasshya2_name'=>'string|max:255' ,
            'sadasshya2_thegana'=>'string|max:255' ,
            'sadasshya2_na_number'=>'string|max:255' ,
            'sadasshya2_jilla'=>'string|max:255' ,
            'sadasshya3_name'=>'string|max:255' ,
            'sadasshya3_thegana'=>'string|max:255' ,
            'sadasshya3_na_number'=>'string|max:255' ,
            'sadasshya3_jilla'=>'string|max:255' ,
            'sadasshya4_name'=>'string|max:255' ,
            'sadasshya4_thegana'=>'string|max:255',
            'sadasshya4_na_number'=>'string|max:255' ,
            'sadasshya4_jilla'=>'string|max:255' ,
            'sadasshya5_name'=>'string|max:255' ,
            'sadasshya5_thegana'=>'string|max:255' ,
            'sadasshya5_na_number'=>'string|max:255' ,
            'sadasshya5_jilla'=>'string|max:255' ,
            'sadasshya6_name'=>'string|max:255' ,
            'sadasshya6_thegana'=>'string|max:255' ,
            'sadasshya6_na_number'=>'string|max:255' ,
            'sadasshya6_jilla'=>'string|max:255' ,
            'sadasshya7_name'=>'string|max:255' ,
            'sadasshya7_thegana'=>'string|max:255' ,
            'sadasshya7_na_number'=>'string|max:255',
            'sadasshya7_jilla'=>'string|max:255',
            'sadasshya8_name'=>'string|max:255' ,
            'sadasshya8_thegana'=>'string|max:255' ,
            'sadasshya8_na_number'=>'string|max:255' ,
            'sadasshya8_jilla'=>'string|max:255' ,

            'upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya'=>'required|string|max:255' ,
            'anubhav_barsa'=>'required|string|max:255',

            'pratham_miti'=>'date|date_format:Y-m-d',
            'pratham_rakam'=>'string|max:255',
            'pratham_samagriko_pariman'=>'string|max:255',
            'pratham_kaifiyet'=>'string|max:255',
            'dorshro_miti'=>'date|date_format:Y-m-d',
            'dorshro_rakam'=>'string|max:255',
            'dorshro_samagriko_pariman'=>'string|max:255',
            'dorshro_kaifiyet'=>'string|max:255',
            'teshro_miti'=>'date|date_format:Y-m-d',
            'teshro_rakam'=>'string|max:255',
            'teshro_samagriko_pariman'=>'string|max:255',
            'teshro_kaifiyet'=>'string|max:255',
            'jamma_miti'=>'date|date_format:Y-m-d',
            'jamma_rakam'=>'string|max:255',
            'jamma_samagriko_pariman'=>'string|max:255' ,
            'jamma_kaifiyet'=>'string|max:255' ,

            'yojana_marmat_jimma_line_samiti'=>'string|max:255',
            'marmat_sambhabit_srot'=>'string|max:255' ,
            'janasramdan'=>'string|max:255' ,
            'sewa_sulka'=>'string|max:255' ,
            'dastur_chandabata'=>'string|max:255' ,
            'anne_kehi_vaye'=>'string|max:255' ,

            'aayojana_ante_miti'=>'required|date|date_format:Y-m-d',
            'aayojana_hune_woda'=>'required|string|max:255',
            'pramukha_prashasakiyeko_name'=>'required|string|max:255',
            'pramukha_prashasakiyeko_number'=>'required|string|max:255' ,
            'adaxyako_number'=>'required|string|max:255' ,
            'kaifiyet'=>'required|string|max:255',
        ]);
        if ($validator->fails()) {
            return $validator->errors();
        }else{
            DB::beginTransaction();
            $record_id = DB::table('records')->insertGetId(
                [
                    'upabhokta_samitiko_naam'=>$request->upabhokta_samitiko_naam,
                    'upabokta_samitiko_thegana'=>$request->upabokta_samitiko_thegana,
                    'aayojanako_naam'=>$request->aayojanako_naam,
                    'aayojanako_sthal'=>$request->aayojanako_sthal,
                    'aayojanako_udeshya'=>$request->aayojanako_udeshya,
                    'aayojana_suru_miti'=> $request->aayojana_suru_miti,
                    'lagat_anuman'=>$request->lagat_anuman,
                    'lagat_behorne_karyalay'=>$request->lagat_behorne_karyalay,
                    'lagat_behorne_upobhokta_samiti'=>$request->lagat_behorne_upobhokta_samiti,
                    'lagat_behorne_anne'=>$request->lagat_behorne_anne,
                    'aayojana_labhanbit_gharpariwar_sangkhya'=>$request->aayojana_labhanbit_gharpariwar_sangkhya,
                    'aayojana_labhanbit_janasankhya'=> $request->aayojana_labhanbit_janasankhya,
                    'aayojana_labhanbit_sangathit_sangkhya'=>$request->aayojana_labhanbit_sangathit_sangkhya,
                    'aayojana_labhanbit_anne'=>$request->aayojana_labhanbit_anne,
                    'gathan_vayeko_miti'=>$request->gathan_vayeko_miti,
                    'upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya'=>$request->upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya ,
                    'anubhav_barsa'=>$request->anubhav_barsa,
                    'yojana_marmat_jimma_line_samiti'=>$request->yojana_marmat_jimma_line_samiti,
                    'marmat_sambhabit_srot'=>$request->marmat_sambhabit_srot,
                    'janasramdan'=>$request->janasramdan,
                    'sewa_sulka'=>$request->sewa_sulka,
                    'dastur_chandabata'=>$request->dastur_chandabata,
                    'anne_kehi_vaye'=>$request->anne_kehi_vaye,
                    'aayojana_ante_miti'=>$request->aayojana_ante_miti,
                    'aayojana_hune_woda'=>$request->aayojana_hune_woda,
                    'pramukha_prashasakiyeko_name'=>$request->pramukha_prashasakiyeko_name,
                    'pramukha_prashasakiyeko_number'=>$request->pramukha_prashasakiyeko_number,
                    'adaxyako_number'=>$request->adaxyako_number,
                    'kaifiyet'=>$request->kaifiyet,
                ]
            );
            $query1 = DB::table('bastugat_anudan')->insertGetId(
                [
                    'record_id'=>$record_id,
                    'bastugat_anudan_sangbata_samagriko_naam'=>$request->bastugat_anudan_sangbata_samagriko_naam,
                    'bastugat_anudan_sangbata_ekai'=>$request->bastugat_anudan_sangbata_ekai,
                    'bastugat_anudan_pradeshbata_samagriko_naam'=>$request->bastugat_anudan_pradeshbata_samagriko_naam,
                    'bastugat_anudan_pradeshbata_ekai'=>$request->bastugat_anudan_pradeshbata_ekai,
                    'bastugat_anudan_sthaniyebata_samagriko_naam'=>$request->bastugat_anudan_sthaniyebata_samagriko_naam,
                    'bastugat_anudan_sthaniyebata_ekai'=>$request->bastugat_anudan_sthaniyebata_ekai,
                    'bastugat_anudan_gairasarakaribata_samagriko_naam'=>$request->bastugat_anudan_gairasarakaribata_samagriko_naam,
                    'bastugat_anudan_gairasarakaribata_ekai'=>$request->bastugat_anudan_gairasarakaribata_ekai,
                    'bastugat_anudan_bideshbata_samagriko_naam'=>$request->bastugat_anudan_bideshbata_samagriko_naam,
                    'bastugat_anudan_bideshbata_ekai'=>$request->bastugat_anudan_bideshbata_ekai,
                    'bastugat_anudan_upobhoktasamitibata_samagriko_naam'=>$request->bastugat_anudan_upobhoktasamitibata_samagriko_naam,
                    'bastugat_anudan_upokhoktasamitibata_ekai'=>$request->bastugat_anudan_upokhoktasamitibata_ekai,
                    'bastugat_anudan_anne_samagriko_naam'=>$request->bastugat_anudan_anne_samagriko_naam,
                    'bastugat_anudan_anne_ekai'=>$request->bastugat_anudan_anne_ekai,
                ]
            );
            $query2 = DB::table('padadhikariharu')->insertGetId(
                [
                    'record_id'=>$record_id,
                    'adaxya_name'=>$request->adaxya_name,
                    'adaxya_thegana'=>$request->adaxya_thegana,
                    'adaxya_na_number'=>$request->adaxya_na_number,
                    'adaxya_jilla'=>$request->adaxya_jilla,
                    'sachib_name'=>$request->sachib_name,
                    'sachib_thegana'=>$request->sachib_thegana,
                    'sachib_na_number'=>$request->sachib_na_number,
                    'sachib_jilla'=>$request->sachib_jilla,
                    'kosha_name'=>$request->kosha_name,
                    'kosha_thegana'=>$request->kosha_thegana,
                    'kosha_na_number'=>$request->kosha_na_number,
                    'kosha_jilla'=>$request->kosha_jilla,
                    'sadasshya1_name'=>$request->sadasshya1_name,
                    'sadasshya1_thegana'=>$request->sadasshya1_thegana,
                    'sadasshya1_na_number'=>$request->sadasshya1_na_number,
                    'sadasshya1_jilla'=>$request->sadasshya1_jilla,
                    'sadasshya2_name'=>$request->sadasshya2_name,
                    'sadasshya2_thegana'=>$request->sadasshya2_thegana,
                    'sadasshya2_na_number'=>$request->sadasshya2_na_number,
                    'sadasshya2_jilla'=>$request->sadasshya2_jilla,
                    'sadasshya3_name'=>$request->sadasshya3_name,
                    'sadasshya3_thegana'=>$request->sadasshya3_thegana,
                    'sadasshya3_na_number'=>$request->sadasshya3_na_number,
                    'sadasshya3_jilla'=>$request->sadasshya3_jilla,
                    'sadasshya4_name'=>$request->sadasshya4_name,
                    'sadasshya4_thegana'=>$request->sadasshya4_thegana,
                    'sadasshya4_na_number'=>$request->sadasshya4_na_number,
                    'sadasshya4_jilla'=>$request->sadasshya4_jilla,
                    'sadasshya5_name'=>$request->sadasshya5_name,
                    'sadasshya5_thegana'=>$request->sadasshya5_thegana,
                    'sadasshya5_na_number'=>$request->sadasshya5_na_number,
                    'sadasshya5_jilla'=>$request->sadasshya5_jilla,
                    'sadasshya6_name'=>$request->sadasshya6_name,
                    'sadasshya6_thegana'=>$request->sadasshya6_thegana,
                    'sadasshya6_na_number'=>$request->sadasshya6_na_number,
                    'sadasshya6_jilla'=>$request->sadasshya6_jilla,
                    'sadasshya7_name'=>$request->sadasshya7_name,
                    'sadasshya7_thegana'=>$request->sadasshya7_thegana,
                    'sadasshya7_na_number'=>$request->sadasshya7_na_number,
                    'sadasshya7_jilla'=>$request->sadasshya7_jilla,
                    'sadasshya8_name'=>$request->sadasshya8_name,
                    'sadasshya8_thegana'=>$request->sadasshya8_thegana,
                    'sadasshya8_na_number'=>$request->sadasshya8_na_number,
                    'sadasshya8_jilla'=>$request->sadasshya8_jilla,
                ]
            );
            $query3 = DB::table('kistako_biwaran')->insertGetId(
                [
                    'record_id'=>$record_id,
                    'pratham_miti'=>$request->pratham_miti,
                    'pratham_rakam'=>$request->pratham_rakam,
                    'pratham_samagriko_pariman'=>$request->pratham_samagriko_pariman,
                    'pratham_kaifiyet'=>$request->pratham_kaifiyet,
                    'dorshro_miti'=>$request->dorshro_miti,
                    'dorshro_rakam'=>$request->dorshro_rakam,
                    'dorshro_samagriko_pariman'=>$request->dorshro_samagriko_pariman,
                    'dorshro_kaifiyet'=>$request->dorshro_kaifiyet,
                    'teshro_miti'=>$request->teshro_miti,
                    'teshro_rakam'=>$request->teshro_rakam,
                    'teshro_samagriko_pariman'=>$request->teshro_samagriko_pariman,
                    'teshro_kaifiyet'=>$request->teshro_kaifiyet,
                    'jamma_miti'=>$request->jamma_miti,
                    'jamma_rakam'=>$request->jamma_rakam,
                    'jamma_samagriko_pariman'=>$request->jamma_samagriko_pariman,
                    'jamma_kaifiyet'=>$request->jamma_kaifiyet,
                ]
            );
            if( !$record_id || !$query1 || !$query2 || !$query3  )
            {
                DB::rollback();
            } else {
                DB::commit();
            }
        }
    }
}
