<?php

namespace App\Http\Controllers\ContentController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\QueryException;

class ProjectOptionController extends Controller
{
    function put_option(Request $request)
    {
        $errors = false;
        if ($request->selectedBiwaran === "bank") {
            $validator = Validator::make($request->all(), [
                'bank.name' => 'required|string|max:25',
                'bank.addr' => 'required|string|max:25',
                'bank.branch' => 'required|string|max:25',
            ]);
            if ($validator->fails()) {
                $errors =true;
            }else {
                $query = DB::table('banks')->insert([
                        'name' => $request->bank['name'],
                        'addr' => $request->bank['addr'],
                        'branch' => $request->bank['branch'],
                    ]
                );
            }
        }
        if ($request->selectedBiwaran === "ppa") {
            $validator = Validator::make($request->all(), [
                'ppa.name' => 'required|string|max:25',
                'ppa.phone' => 'required|string|max:25',
            ]);
            if ($validator->fails()) {
                $errors =true;
            } else {
                $query = DB::table('ppas')->insert(
                    [
                        'name' => $request->ppa['name'],
                        'phone' => $request->ppa['phone'],
                    ]
                );
            }
        }
        if ($request->selectedBiwaran === "lagatBehorneSrot") {
            $validator = Validator::make($request->all(), [
                'lagatBehorneSrot.name' => 'required|string|max:50',
            ]);
            if ($validator->fails()) {
                $errors =true;
            } else {
                $query = DB::table('lagatbehornesrots')->insert(
                    [
                        'name' => $request->lagatBehorneSrot['name'],
                    ]
                );
            }
        }
        if ($request->selectedBiwaran === "padadhikariPada") {
            $validator = Validator::make($request->all(), [
                'padadhikariPada.pada' => 'required|string|max:25',
                'padadhikariPada.level' => 'required|string|max:25',
            ]);
            if ($validator->fails()) {
                $errors =true;
            } else {
                $query = DB::table('padadhikaripadas')->insert(
                    [
                        'pada' => $request->padadhikariPada['pada'],
                        'level' => $request->padadhikariPada['level'],
                    ]
                );
            }
        }
        if ($request->selectedBiwaran === "ward") {
            $validator = Validator::make($request->all(), [
                'ward.name' => 'required|string|max:25',
                'ward.number' => 'required|string|max:25',
            ]);
            if ($validator->fails()) {
                $errors =true;
            } else {
                $query = DB::table('wards')->insert(
                    [
                        'name' => $request->ward['name'],
                        'number' => $request->ward['number'],
                    ]
                );
            }
        }
        if ($request->selectedBiwaran === "totalWardProject") {
            $validator = Validator::make($request->all(), [
                'totalWardProject.wardId' => 'required|integer',
                'totalWardProject.total' => 'required|integer',
            ]);
            if ($validator->fails()) {
                $errors =true;
            } else {
                $query = DB::table('totalwardprojects')->updateOrInsert(
                    ['wardId' => $request->totalWardProject['wardId']],
                    ['total' => $request->totalWardProject['total']],
                );
            }
        }
        if($errors===true){
            return response(array(0,$validator->errors()));
        }else{
            return response(array(1));
        }
    }


    function getOptions(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'detail'=>'required|string|max:100',
        ]);
        if ($validator->fails()) {
            return response(array(0, $validator->errors()));
        }
        if($request->detail==='all'){
            $banks = DB::select('SELECT * FROM banks', []);
            $ppa = DB::select('SELECT * FROM ppas', []);
            $lagatBehorneSrot = DB::select('SELECT * FROM lagatbehornesrots', []);
            $padadhikariPadas = DB::select('SELECT * FROM padadhikaripadas', []);
            $wards = DB::select('SELECT * FROM wards', []);
            $totalWardProjects = DB::select('SELECT totalwardprojects.*, wards.* FROM totalwardprojects JOIN wards on(totalwardprojects.wardId=wards.id)', []);
            return response()->json(['banks'=>$banks,'ppas'=>$ppa,'lagatBehorneSrots'=>$lagatBehorneSrot,'padadhikariPadas'=>$padadhikariPadas,'wards'=>$wards,'totalWardProjects'=>$totalWardProjects]);
        }
        if($request->detail==='ward'){
            $wards = DB::select('SELECT * FROM wards', []);
            return response($wards);
        }
        if($request->options==='totalYojanaharu'){
            $yojana_sangkhya = DB::select('SELECT * FROM yojana_sangkhya where fy=?', [$request->fy]);
            return response(array('status'=>1,'yojana_sangkhya'=>$yojana_sangkhya),201);
        }else{
            return null;
        }
    }
    function deleteDetail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'detail'=>'required|string|max:100',
            'id'=>'required|integer',
        ]);
        if ($validator->fails()) {
            return response(array(0, $validator->errors()));
        }
        if($request->detail==='bank'){
            DB::table('banks')->where('id', $request->id)->delete();
        }
        if($request->detail==='ppa'){
            DB::table('ppas')->where('id', $request->id)->delete();
        }
        if($request->detail==='padadhikariPada'){
            DB::table('padadhikariPadas')->where('id', $request->id)->delete();
        }
        if($request->detail==='lagatBehorneSrot'){
            DB::table('lagatBehorneSrots')->where('id', $request->id)->delete();
        }
        if($request->detail==='ward'){
            DB::table('wards')->where('id', $request->id)->delete();
        }
        if($request->detail==='totalWardProject'){
            DB::table('totalWardProjects')->where('id', $request->id)->delete();
        }
        else{
            return null;
        }
    }
}
