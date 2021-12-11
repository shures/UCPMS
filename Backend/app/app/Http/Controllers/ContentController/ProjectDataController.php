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
        if (!empty($request->pratham_miti)) {
            $request->pratham_miti = Carbon::createFromFormat('Y-m-d', $request->pratham_miti)->toDateString();
        }
        if (!empty($request->dorshro_miti)) {
            $request->dorshro_miti = Carbon::createFromFormat('Y-m-d', $request->dorshro_miti)->toDateString();
        }
        if (!empty($request->teshro_miti)) {
            $request->teshro_miti = Carbon::createFromFormat('Y-m-d', $request->teshro_miti)->toDateString();
        }
        if (!empty($request->jamma_miti)) {
            $request->jamma_miti = Carbon::createFromFormat('Y-m-d', $request->jamma_miti)->toDateString();
        }
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
            'lagat_behorne_anne_option'=>'required|integer',
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

            'padadhikariharu' => "required|array|min:1|max:15",
            'padadhikariharu.*.pada' => "required|integer",
            'padadhikariharu.*.name' => "required|string|max:255",
            'padadhikariharu.*.thegana' => "required|string|max:255",
            'padadhikariharu.*.na_na' => "required|string|max:255",
            'padadhikariharu.*.jilla' => "required|string|max:255",

            'upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya'=>'required|string|max:255' ,
            'anubhav_barsa'=>'required|string|max:255',

            'pratham_miti'=>'nullable|date|date_format:Y-m-d',
            'pratham_rakam'=>'string|max:255',
            'pratham_samagriko_pariman'=>'string|max:255',
            'pratham_kaifiyet'=>'string|max:255',
            'dorshro_miti'=>'nullable|date|date_format:Y-m-d',
            'dorshro_rakam'=>'string|max:255',
            'dorshro_samagriko_pariman'=>'string|max:255',
            'dorshro_kaifiyet'=>'string|max:255',
            'teshro_miti'=>'nullable|date|date_format:Y-m-d',
            'teshro_rakam'=>'string|max:255',
            'teshro_samagriko_pariman'=>'string|max:255',
            'teshro_kaifiyet'=>'string|max:255',
            'jamma_miti'=>'nullable|date|date_format:Y-m-d',
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
            'pramukha_prashasakiyeko_name'=>'required|integer',
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
                    'lagat_behorne_anne_option'=>$request->lagat_behorne_anne_option,
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
            $data = array();
            for($i=0;$i<count($request->padadhikariharu);$i++){
                array_push($data,[
                    'record_id'=>$record_id,
                    'pada'=>$request->padadhikariharu[$i]['pada'],
                    'name'=>$request->padadhikariharu[$i]['name'],
                    'thegana'=>$request->padadhikariharu[$i]['thegana'],
                    'na_na'=>$request->padadhikariharu[$i]['na_na'],
                    'jilla'=>$request->padadhikariharu[$i]['jilla'],
                ]);
            }
            $query2 = DB::table('padadhikariharu')->insert(
                $data
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
            {DB::rollback();} else {DB::commit();}
        }
    }
    function getProject(Request $request)
    {
        $errors = false;
        $getProject = null;
        $validator = Validator::make($request->all(), [
            'id'=>'required|integer',
        ]);
        if ($validator->fails()) {
            $errors = true;
        }else{
            $getProject = DB::selectOne('SELECT records.*, padadhikariharu.*, kistako_biwaran.*, bastugat_anudan.* FROM records JOIN padadhikariharu JOIN kistako_biwaran JOIN bastugat_anudan on (records.id=padadhikariharu.record_id and records.id=kistako_biwaran.record_id and records.id=bastugat_anudan.record_id) WHERE records.id=?', [$request->id]);
//            if (!$getProject) {
//                array_push($errors, 'Error in selecting bank !');
//            }
        }
        if($errors===true){
            return response(array(0,$validator->errors()));
        }else{
            return response(array(1,$getProject),201);
        }
    }
    function searchProject(Request $request)
    {
        $errors = false;
        $query = null;
        $validator = Validator::make($request->all(), [
            'aayojana_naam'=>'required|string|max:255',
        ]);
        if ($validator->fails()) {
            $errors = true;
        }else{
            $query = DB::select('SELECT id, aayojanako_naam, aayojanako_sthal FROM records WHERE aayojanako_naam like ?', ['%'.$request->aayojana_naam.'%']);
        }
        if($errors===true){
            return response(array(0,$validator->errors()));
        }else{
            return response(array(1,$query),201);
        }
    }
    function getSifaris(Request $request)
    {
        $errors = false;
        $query = null;
        $query1 = null;
        $query2 = null;
        $validator = Validator::make($request->all(), [
            'id'=>'required|integer',
        ]);
        if ($validator->fails()) {
            $errors = true;
        }else{
            $query = DB::selectOne('SELECT * FROM records WHERE id=?', [$request->id]);
            $query1 = DB::select('SELECT padadhikariharu.*, padadhikari_pada_options.* FROM padadhikariharu JOIN padadhikari_pada_options on (padadhikariharu.pada=padadhikari_pada_options.id ) WHERE record_id=?', [$query->id]);
            $query2 = DB::selectOne('SELECT COUNT(id) as jamma_padadhikariharu FROM padadhikariharu WHERE record_id=?', [$query->id]);
        }
        if($errors===true){
            return response(array(0,$validator->errors()));
        }else{
            return response(array(1,$query,$query1,$query2),201);
        }
    }
    function getProjects(Request $request)
    {
//        return $request;
        $getProjects = DB::select('SELECT records.*, padadhikariharu.*, kistako_biwaran.*, bastugat_anudan.* FROM records JOIN padadhikariharu JOIN kistako_biwaran JOIN bastugat_anudan on (records.id=padadhikariharu.record_id and records.id=kistako_biwaran.record_id and records.id=bastugat_anudan.record_id)', []);
        return response($getProjects,201);
    }
    function getBarChart(Request $request)
    {
        $year = 2078;
        $query1 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM records WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year.'/03/01',$year.'/04/01']);
        $query2 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM records WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year.'/04/01',$year.'/05/01']);
        $query3 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM records WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year.'/05/01',$year.'/06/01']);
        $query4 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM records WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year.'/06/01',$year.'/07/01']);
        $query5 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM records WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year.'/07/01',$year.'/08/01']);
        $query6 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM records WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year.'/08/01',$year.'/09/01']);
        $query7 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM records WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year.'/09/01',$year.'/10/01']);
        $query8 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM records WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year.'/10/01',$year.'/11/01']);
        $query9 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM records WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year.'/11/01',$year.'/12/01']);
        $query10 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM records WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year.'/12/01',$year.'/01/01']);
        $query11 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM records WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year.'/01/01',$year.'/02/01']);
        $query12 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM records WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year.'/02/01',$year.'/03/01']);
        return response(array($query1,$query2,$query3,$query4,$query5,$query6,$query7,$query8,$query9,$query10,$query11,$query12),201);
    }
}


