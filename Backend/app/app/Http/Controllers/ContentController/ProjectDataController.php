<?php

namespace App\Http\Controllers\ContentController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
            'update'=>'bail|required|boolean',
            'projectId'=>'bail|required_if:update,true|nullable|exists:projects,id',

            'upabhokta_samitiko_naam' => 'bail|required|string|max:255',
            'upabokta_samitiko_thegana' => 'bail|required|string|max:255',
            'aayojanako_naam' => 'bail|required|string|max:255',
            'aayojanako_sthal' => 'bail|required|string|max:255',
            'aayojanako_udeshya' => 'bail|required|string|max:255',
            'aayojana_suru_miti' => 'bail|required|date|date_format:Y-m-d',
            'lagat_anuman' => 'bail|required|integer',
            'lagat_behorne_karyalay' => 'bail|required|integer',
            'lagat_behorne_upobhokta_samiti' => 'bail|required|integer',
            'lagatBehorneSrotId' => 'bail|required|integer|exists:lagatbehornesrots,id',
            'lagat_behorne_anne' => 'bail|integer',

            'bastugat_anudan_sangbata_samagriko_naam' => 'bail|required|string|max:255',
            'bastugat_anudan_sangbata_ekai' => 'bail|required|string|max:255',
            'bastugat_anudan_pradeshbata_samagriko_naam' => 'bail|required|string|max:255',
            'bastugat_anudan_pradeshbata_ekai' => 'bail|required|string|max:255',
            'bastugat_anudan_sthaniyebata_samagriko_naam' => 'bail|required|string|max:255',
            'bastugat_anudan_sthaniyebata_ekai' => 'bail|required|string|max:255',
            'bastugat_anudan_gairasarakaribata_samagriko_naam' => 'bail|required|string|max:255',
            'bastugat_anudan_gairasarakaribata_ekai' => 'bail|required|string|max:255',
            'bastugat_anudan_bideshbata_samagriko_naam' => 'bail|required|string|max:255',
            'bastugat_anudan_bideshbata_ekai' => 'bail|required|string|max:255',
            'bastugat_anudan_upobhoktasamitibata_samagriko_naam' => 'bail|required|string|max:255',
            'bastugat_anudan_upokhoktasamitibata_ekai' => 'bail|required|string|max:255',
            'bastugat_anudan_anne_samagriko_naam' => 'bail|required|string|max:255',
            'bastugat_anudan_anne_ekai' => 'bail|required|string|max:255',

            'aayojana_labhanbit_gharpariwar_sangkhya' => 'bail|required|string|max:255',
            'aayojana_labhanbit_janasankhya' => 'bail|required|string|max:255',
            'aayojana_labhanbit_sangathit_sangkhya' => 'bail|string|max:255',
            'aayojana_labhanbit_anne' => 'bail|string|max:255',
            'gathan_vayeko_miti' => 'bail|required|date|date_format:Y-m-d',

            'padadhikariharu' => "bail|required|array|min:1|max:15",
            'padadhikariharu.*.projectpadadhikariId' => "sometimes|required|exists:projectpadadhikaris,id",
            'padadhikariharu.*.padadhikariPadaId' => "bail|required|integer|exists:padadhikaripadas,id",
            'padadhikariharu.*.name' => "bail|required|string|max:255",
            'padadhikariharu.*.thegana' => "bail|required|string|max:255",
            'padadhikariharu.*.na_na' => "bail|required|string|max:255",
            'padadhikariharu.*.jilla' => "bail|required|string|max:255",

            'upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya' => 'bail|required|string|max:255',
            'anubhav_barsa' => 'bail|required|string|max:255',

            'pratham_miti' => 'bail|nullable|date|date_format:Y-m-d',
            'pratham_rakam' => 'bail|string|max:255',
            'pratham_samagriko_pariman' => 'bail|string|max:255',
            'pratham_kaifiyet' => 'bail|string|max:255',
            'dorshro_miti' => 'bail|nullable|date|date_format:Y-m-d',
            'dorshro_rakam' => 'bail|string|max:255',
            'dorshro_samagriko_pariman' => 'bail|string|max:255',
            'dorshro_kaifiyet' => 'bail|string|max:255',
            'teshro_miti' => 'bail|nullable|date|date_format:Y-m-d',
            'teshro_rakam' => 'bail|string|max:255',
            'teshro_samagriko_pariman' => 'bail|string|max:255',
            'teshro_kaifiyet' => 'bail|string|max:255',
            'jamma_miti' => 'bail|nullable|date|date_format:Y-m-d',
            'jamma_rakam' => 'bail|string|max:255',
            'jamma_samagriko_pariman' => 'bail|string|max:255',
            'jamma_kaifiyet' => 'bail|string|max:255',

            'yojana_marmat_jimma_line_samiti' => 'bail|string|max:255',
            'marmat_sambhabit_srot' => 'bail|string|max:255',
            'janasramdan' => 'bail|string|max:255',
            'sewa_sulka' => 'bail|string|max:255',
            'dastur_chandabata' => 'bail|string|max:255',
            'anne_kehi_vaye' => 'bail|string|max:255',

            'aayojana_ante_miti' => 'bail|required|date|date_format:Y-m-d',
            'wardId' => 'bail|required|integer||exists:wards,id',
            'ppaId' => 'bail|required|integer|exists:ppas,id',
            'kaifiyet' => 'bail|required|string|max:255',

        ]);
        if ($validator->fails()) {
            return response(array(0, $validator->errors()));
        }
        $project = array('upabhokta_samitiko_naam' => $request->upabhokta_samitiko_naam,
            'upabokta_samitiko_thegana' => $request->upabokta_samitiko_thegana,
            'aayojanako_naam' => $request->aayojanako_naam,
            'aayojanako_sthal' => $request->aayojanako_sthal,
            'aayojanako_udeshya' => $request->aayojanako_udeshya,
            'aayojana_suru_miti' => $request->aayojana_suru_miti,
            'lagat_anuman' => $request->lagat_anuman,
            'lagat_behorne_karyalay' => $request->lagat_behorne_karyalay,
            'lagat_behorne_upobhokta_samiti' => $request->lagat_behorne_upobhokta_samiti,
            'lagatBehorneSrotId' => $request->lagatBehorneSrotId,
            'lagat_behorne_anne' => $request->lagat_behorne_anne,
            'aayojana_labhanbit_gharpariwar_sangkhya' => $request->aayojana_labhanbit_gharpariwar_sangkhya,
            'aayojana_labhanbit_janasankhya' => $request->aayojana_labhanbit_janasankhya,
            'aayojana_labhanbit_sangathit_sangkhya' => $request->aayojana_labhanbit_sangathit_sangkhya,
            'aayojana_labhanbit_anne' => $request->aayojana_labhanbit_anne,
            'gathan_vayeko_miti' => $request->gathan_vayeko_miti,
            'upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya' => $request->upobhokta_samiti_gathan_garda_upasthit_labhanbit_sangkhya,
            'anubhav_barsa' => $request->anubhav_barsa,
            'yojana_marmat_jimma_line_samiti' => $request->yojana_marmat_jimma_line_samiti,
            'marmat_sambhabit_srot' => $request->marmat_sambhabit_srot,
            'janasramdan' => $request->janasramdan,
            'sewa_sulka' => $request->sewa_sulka,
            'dastur_chandabata' => $request->dastur_chandabata,
            'anne_kehi_vaye' => $request->anne_kehi_vaye,
            'aayojana_ante_miti' => $request->aayojana_ante_miti,
            'wardId' => $request->wardId,
            'ppaId' => $request->ppaId,
            'adaxyako_number' => $request->adaxyako_number,
            'kaifiyet' => $request->kaifiyet
        );
        if ($request->update) {
            DB::table('projects')->where('id', $request->projectId)->update($project);
            $projectId = $request->projectId;
        } else {
            $projectId = DB::table('projects')->insertGetId($project);
        }

        $padadhikariIds = array();
        for ($i = 0; $i < count($request->padadhikariharu); $i++) {
            $padadhikari = array(
                'projectId' => $projectId,
                'padadhikariPadaId' => $request->padadhikariharu[$i]['padadhikariPadaId'],
                'name' => $request->padadhikariharu[$i]['name'],
                'thegana' => $request->padadhikariharu[$i]['thegana'],
                'na_na' => $request->padadhikariharu[$i]['na_na'],
                'jilla' => $request->padadhikariharu[$i]['jilla'],
            );
            if (array_key_exists('projectpadadhikariId', $request->padadhikariharu[$i])) {
                DB::table('projectpadadhikaris')->where('id', $request->padadhikariharu[$i]['projectpadadhikariId'])->update($padadhikari);
                $padadhikariIds[] = $request->padadhikariharu[$i]['projectpadadhikariId'];
            } else {
                $padadhikariIds[] = DB::table('projectpadadhikaris')->insertGetId($padadhikari);
            }
        }
        if ($request->update) {
            DB::table('projectpadadhikaris')->where('projectID', $request->projectId)->whereNotIn('id', $padadhikariIds)->delete();
        }

        DB::table('projectbastugatanudans')->updateOrInsert(
            ['projectId' => $projectId],
            [
                'bastugat_anudan_sangbata_samagriko_naam' => $request->bastugat_anudan_sangbata_samagriko_naam,
                'bastugat_anudan_sangbata_ekai' => $request->bastugat_anudan_sangbata_ekai,
                'bastugat_anudan_pradeshbata_samagriko_naam' => $request->bastugat_anudan_pradeshbata_samagriko_naam,
                'bastugat_anudan_pradeshbata_ekai' => $request->bastugat_anudan_pradeshbata_ekai,
                'bastugat_anudan_sthaniyebata_samagriko_naam' => $request->bastugat_anudan_sthaniyebata_samagriko_naam,
                'bastugat_anudan_sthaniyebata_ekai' => $request->bastugat_anudan_sthaniyebata_ekai,
                'bastugat_anudan_gairasarakaribata_samagriko_naam' => $request->bastugat_anudan_gairasarakaribata_samagriko_naam,
                'bastugat_anudan_gairasarakaribata_ekai' => $request->bastugat_anudan_gairasarakaribata_ekai,
                'bastugat_anudan_bideshbata_samagriko_naam' => $request->bastugat_anudan_bideshbata_samagriko_naam,
                'bastugat_anudan_bideshbata_ekai' => $request->bastugat_anudan_bideshbata_ekai,
                'bastugat_anudan_upobhoktasamitibata_samagriko_naam' => $request->bastugat_anudan_upobhoktasamitibata_samagriko_naam,
                'bastugat_anudan_upokhoktasamitibata_ekai' => $request->bastugat_anudan_upokhoktasamitibata_ekai,
                'bastugat_anudan_anne_samagriko_naam' => $request->bastugat_anudan_anne_samagriko_naam,
                'bastugat_anudan_anne_ekai' => $request->bastugat_anudan_anne_ekai,
            ]);
        DB::table('projectkistakobiwarans')->updateOrInsert(
            ['projectId' => $projectId],
            [
                'pratham_miti' => $request->pratham_miti,
                'pratham_rakam' => $request->pratham_rakam,
                'pratham_samagriko_pariman' => $request->pratham_samagriko_pariman,
                'pratham_kaifiyet' => $request->pratham_kaifiyet,
                'dorshro_miti' => $request->dorshro_miti,
                'dorshro_rakam' => $request->dorshro_rakam,
                'dorshro_samagriko_pariman' => $request->dorshro_samagriko_pariman,
                'dorshro_kaifiyet' => $request->dorshro_kaifiyet,
                'teshro_miti' => $request->teshro_miti,
                'teshro_rakam' => $request->teshro_rakam,
                'teshro_samagriko_pariman' => $request->teshro_samagriko_pariman,
                'teshro_kaifiyet' => $request->teshro_kaifiyet,
                'jamma_miti' => $request->jamma_miti,
                'jamma_rakam' => $request->jamma_rakam,
                'jamma_samagriko_pariman' => $request->jamma_samagriko_pariman,
                'jamma_kaifiyet' => $request->jamma_kaifiyet,
            ]);
        return response(array(1, $projectId));
    }
    function getProject(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'projectId'=>'required|integer',
        ]);
        if ($validator->fails()) {
            return response(array(0,$validator->errors()));
        }
        $query = DB::selectOne('SELECT projects.*, projects.id as projectId, projectpadadhikaris.*, projectkistakobiwarans.*, projectbastugatanudans.*, ppas.*, ppas.name as ppaName, ppas.phone as ppaPhone, wards.number as wardNumber FROM projects JOIN projectpadadhikaris JOIN projectkistakobiwarans JOIN projectbastugatanudans JOIN ppas JOIN wards on (projects.id=projectpadadhikaris.projectId and projects.id=projectkistakobiwarans.projectId and projects.id=projectbastugatanudans.projectId and projects.ppaId=ppas.id and projects.wardId=wards.id) WHERE projects.id=?', [$request->projectId]);
        $query1 = DB::select('SELECT projectpadadhikaris.*, projectpadadhikaris.id as projectpadadhikariId, padadhikaripadas.* FROM projectpadadhikaris INNER JOIN padadhikaripadas on (projectpadadhikaris.padadhikaripadaId=padadhikaripadas.id) WHERE projectpadadhikaris.projectId=? ORDER BY padadhikaripadas.level', [$request->projectId]);
        return response(array(1,$query,$query1),201);
    }
    function getSifaris(Request $request)
    {
        $errors = false;
        $query = null;
        $query1 = null;
        $query2 = null;
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer',
        ]);
        if ($validator->fails()) {
            $errors = true;
        } else {
            $query = DB::selectOne('SELECT * FROM projects WHERE id=?', [$request->id]);
            $query1 = DB::select('SELECT padadhikariharu.*, padadhikari_pada_options.* FROM padadhikariharu JOIN padadhikari_pada_options on (padadhikariharu.pada=padadhikari_pada_options.id ) WHERE record_id=?', [$query->id]);
            $query2 = DB::selectOne('SELECT COUNT(id) as jamma_padadhikariharu FROM padadhikariharu WHERE record_id=?', [$query->id]);
        }
        if ($errors === true) {
            return response(array(0, $validator->errors()));
        } else {
            return response(array(1, $query, $query1, $query2), 201);
        }
    }
    function getSearch(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'projectName' => 'required|string|max:25',
        ]);
        if ($validator->fails()) {
            return response(array(0, $validator->errors()));
        } else {
            $projects = DB::select('SELECT * FROM projects WHERE aayojanako_naam like ?', ['%' .$request->projectName. '%' ]);
            return response(array(1, $projects));
        }

    }

    function getProjects(Request $request)
    {
        $aa_ba = DB::selectOne('SELECT * FROM setting Where title=? ', ["aa_ba"]);
        $validator = Validator::make($request->all(), [
            'aa_ba' => 'required|string|max:10',
        ]);
        if ($validator->fails()) {
            return response(array(0, $validator->errors()));
        }
        $aa_ba = $request->aa_ba==='aa_ba' ? substr($aa_ba->option,0,4) : ( $request->aa_ba==='all' ? '' : null );
        $level = DB::selectOne('SELECT MIN(level) as level From padadhikaripadas');
        $getProjects = DB::select("SELECT projects.*, projectpadadhikaris.*,projectpadadhikaris.name as projectpadadhikariName, padadhikaripadas.*, wards.*, wards.number as wardNumber FROM projects JOIN projectpadadhikaris JOIN padadhikaripadas JOIN wards on (projects.id=projectpadadhikaris.projectId and padadhikaripadas.id=projectpadadhikaris.padadhikariPadaId and projects.wardId=wards.id) WHERE padadhikaripadas.level=? and aayojana_suru_miti like ? ", [$level->level,'%' .$aa_ba. '%' ]);
        return response($getProjects, 201);
    }

    function getBarChart(Request $request)
    {
        $aa_ba = DB::selectOne('SELECT * FROM setting Where title=? ', ["aa_ba"]);
        $year = substr($aa_ba->option,0,4);
        $nextYear = (int) $year + 1;

        $query1 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM projects WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year . '/04/01', $year . '/05/01']);
        $query2 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM projects WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year . '/05/01', $year . '/06/01']);
        $query3 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM projects WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year . '/06/01', $year . '/07/01']);
        $query4 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM projects WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year . '/07/01', $year . '/08/01']);
        $query5 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM projects WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year . '/08/01', $year . '/09/01']);
        $query6 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM projects WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year . '/09/01', $year . '/10/01']);
        $query7 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM projects WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year . '/10/01', $year . '/11/01']);
        $query8 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM projects WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year . '/11/01', $year . '/12/01']);
        $query9 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM projects WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year . '/12/01', $nextYear . '/01/01']);
        $query10 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM projects WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$nextYear . '/01/01', $nextYear . '/02/01']);
        $query11 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM projects WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$nextYear . '/02/01', $nextYear . '/03/01']);
        $query12 = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu FROM projects WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$nextYear . '/03/01', $nextYear . '/04/01']);
        return response(array($query1, $query2, $query3, $query4, $query5, $query6, $query7, $query8, $query9, $query10, $query11, $query12));
    }

    function getMunReport(Request $request)
    {
        $aa_ba = DB::selectOne('SELECT * FROM setting Where title=? ', ["aa_ba"]);
        $year = substr($aa_ba->option,0,4);
        $nextYear = (int) $year + 1;
        $query = DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu, sum(lagat_behorne_karyalay) as lagat_behorne_karyalay, sum(lagat_behorne_upobhokta_samiti) as lagat_behorne_upobhokta_samiti, sum(lagat_behorne_anne) as lagat_behorne_anne FROM projects WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ?', [$year . '/04/01', $nextYear . '/04/01']);
        return $query[0];
    }

    function getWardReport(Request $request)
    {
        $aa_ba = DB::selectOne('SELECT * FROM setting Where title=? ', ["aa_ba"]);
        $year = substr($aa_ba->option,0,4);
        $nextYear = (int) $year + 1;

        $query =  DB::select('SELECT sum(lagat_anuman) as lagat_anuman, count(id) as yojanaharu, sum(lagat_behorne_karyalay) as lagat_behorne_karyalay, sum(lagat_behorne_upobhokta_samiti) as lagat_behorne_upobhokta_samiti, sum(lagat_behorne_anne) as lagat_behorne_anne, wardId FROM projects WHERE ( aayojana_suru_miti>= ? and aayojana_suru_miti < ? ) Group By wardId', [$year . '/04/01', $nextYear . '/04/01']);
        $index = 0;
        foreach ($query as $value){
            $wards = DB::selectOne('SELECT * FROM wards WHERE id=?',[$value->wardId]);
            $query[$index]->wardNumber = $wards->number;
            $query[$index]->wardName = $wards->name;
            $index=$index+1;
        }
        return $query;
    }

    function getProgressReport(Request $request)
    {
        $aa_ba = DB::selectOne('SELECT * FROM setting Where title=? ', ["aa_ba"]);
        $year = substr($aa_ba->option,0,4);
        $nextYear = (int) $year + 1;

        $query = DB::select('SELECT count(id) as totalCompletedWardProjects, wardId FROM projects WHERE aayojana_suru_miti>= ? and aayojana_suru_miti < ? group by wardId', [$year . '/04/01', $nextYear . '/04/01']);
        $index = 0;
        $gapa = array('totalGapaProjects'=>0,'totalCompletedGapaProjects'=>0);
        foreach ($query as $item) {
            $wards = DB::selectOne('SELECT * FROM wards where id=?', [$item->wardId]);
            $totalwardprojects = DB::selectOne('SELECT * FROM totalwardprojects where wardId=? ', [$item->wardId]);
            $query[$index]->wardNumber = $wards->number;
            $query[$index]->wardName = $wards->name;
            $query[$index]->totalWardProjects = $totalwardprojects->total;
            $gapa['totalGapaProjects'] = $gapa['totalGapaProjects']+$totalwardprojects->total;
            $gapa['totalCompletedGapaProjects'] = $gapa['totalCompletedGapaProjects']+$item->totalCompletedWardProjects;
            $index=$index+1;
        }
        return array($query,$gapa);
    }
}


