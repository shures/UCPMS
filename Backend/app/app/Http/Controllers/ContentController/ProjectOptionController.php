<?php

namespace App\Http\Controllers\ContentController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProjectOptionController extends Controller
{
    function put_option(Request $request)
    {
        $errors = false;
        if(is_int($request->selected_option) and $request->selected_option===1){
            $validator = Validator::make($request->all(), [
                'bank_name'=>'required|string|max:50',
                'bank_sakha'=>'required|string|max:50',
                'bank_thegana'=>'required|string|max:50',
            ]);
            if ($validator->fails()) {
                $errors = true;
            }else{
                $query = DB::table('bank_options')->insert(
                    [
                        'bank_name'=>$request->bank_name,
                        'bank_sakha'=>$request->bank_sakha,
                        'bank_thegana'=>$request->bank_thegana,
                    ]
                );
            }
        }
        if(is_int($request->selected_option) and $request->selected_option===1){
            $validator = Validator::make($request->all(), [
                'bank_name'=>'required|string|max:50',
                'bank_sakha'=>'required|string|max:50',
                'bank_thegana'=>'required|string|max:50',
            ]);
            if ($validator->fails()) {
                $errors = true;
            }else{
                $query = DB::table('bank_options')->insert(
                    [
                        'bank_name'=>$request->bank_name,
                        'bank_sakha'=>$request->bank_sakha,
                        'bank_thegana'=>$request->bank_thegana,
                    ]
                );
            }
        }
        if(is_int($request->selected_option) and $request->selected_option===2){
            $validator = Validator::make($request->all(), [
                'ppa_name'=>'required|string|max:50',
                'ppa_number'=>'required|string|max:50',
            ]);
            if ($validator->fails()) {
                $errors = true;
            }else{
                $query = DB::table('ppa_options')->insert(
                    [
                        'ppa_name'=>$request->ppa_name,
                        'ppa_number'=>$request->ppa_number,
                    ]
                );
            }
        }
        if(is_int($request->selected_option) and $request->selected_option===3){
            $validator = Validator::make($request->all(), [
                'lagat_behorne_srot'=>'required|string|max:50',
            ]);
            if ($validator->fails()) {
                $errors = true;
            }else{
                $query = DB::table('lagat_behorne_srot_options')->insert(
                    [
                        'lagat_behorne_srot'=>$request->lagat_behorne_srot,
                    ]
                );
            }
        }
        if(is_int($request->selected_option) and $request->selected_option===4){
            $validator = Validator::make($request->all(), [
                'padadhikari_pada'=>'required|string|max:50',
                'padadhikari_level'=>'required|integer|max:50',
            ]);
            if ($validator->fails()) {
                $errors = true;
            }else{
                $query = DB::table('padadhikari_pada_options')->insert(
                    [
                        'pada'=>$request->padadhikari_pada,
                        'level'=>$request->padadhikari_level,
                    ]
                );
            }
        }
        if(is_int($request->selected_option) and $request->selected_option===5){
            $validator = Validator::make($request->all(), [
                'ward_number'=>'required|integer|max:100',
                'ward_name'=>'required|string|max:100',
            ]);
            if ($validator->fails()) {
                $errors = true;
            }else{
                $query = DB::table('ward_options')->insert(
                    [
                        'ward_number'=>$request->ward_number,
                        'ward_name'=>$request->ward_name,
                    ]
                );
            }
        }
        if(is_int($request->selected_option) and $request->selected_option===6){
            $validator = Validator::make($request->all(), [
                'yojana_sangkhya_ward_number'=>'required|integer|max:20',
                'yojana_sangkhya'=>'required|integer|max:500',
                'aarthik_barsa'=>'required|string|max:50',
            ]);
            if ($validator->fails()) {
                $errors = true;
            }else{
                $bank = DB::selectOne('SELECT ward_number, fy FROM yojana_sangkhya WHERE ward_number=? and fy=? ', [$request->yojana_sangkhya_ward_number,$request->aarthik_barsa]);
                if($bank===null){
                    $query = DB::table('yojana_sangkhya')->insert(
                        [
                            'ward_number'=>$request->yojana_sangkhya_ward_number,
                            'yojana_sangkhya'=>$request->yojana_sangkhya,
                            'fy'=>$request->aarthik_barsa,
                        ]
                    );
                }else{
                    $errors = true;
                    $validator->getMessageBag()->add('alreadyExits', 'Failed ! Already Existed, Please update it.');
                }
            }
        }
        if($errors===true){
            return response(array(0,$validator->errors()));
        }else{
            return response(array(1,'सफलतापूर्वक थपियो ।'),201);
        }
    }
    function getOptionRecord(Request $request)
    {
        $errors = false;
        $validator = Validator::make($request->all(), [
            'selected_option'=>'required|integer|max:50',
        ]);
        if ($validator->fails()) {
            $errors = true;
        }else{
            if($request->selected_option===1){
                $bank = DB::select('SELECT * FROM bank_options', []);
                if (!$bank) {
                    array_push($errors, 'Error in selecting bank !');
                } else {
                    return response()->json(array('success', $bank));
                }
            }
        }
        if($errors===true){
            return response(array(0,$validator->errors()));
        }else{
            return response(array(1,"सफलतापुर्वक थपियो"),201);
        }
    }
    function getOptions(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'options'=>'required|string|max:100',
            'fy'=>'string|max:50',
        ]);
        if ($validator->fails()) {
            return response(array(0, $validator->errors()));
        }
        if($request->options==='all'){
            $bank = DB::select('SELECT * FROM bank_options', []);
            $ppa = DB::select('SELECT * FROM ppa_options', []);
            $lagat_behorne_srot = DB::select('SELECT * FROM lagat_behorne_srot_options', []);
            $padadhikari_pada = DB::select('SELECT * FROM padadhikari_pada_options', []);
            $ward_options = DB::select('SELECT * FROM ward_options', []);
            $yojana_sangkhya = DB::select('SELECT * FROM yojana_sangkhya where fy=?', [$request->fy]);
            return response(array('status'=>1,'bank_options'=>$bank,'ppa_options'=>$ppa,'lagat_behorne_srot_options'=>$lagat_behorne_srot,'padadhikari_pada_options'=>$padadhikari_pada,'ward_options'=>$ward_options,'yojana_sangkhya'=>$yojana_sangkhya),201);
        }
        if($request->options==='ward'){
            $ward_options = DB::select('SELECT * FROM ward_options', []);
            return response(array('status'=>1,'ward_options'=>$ward_options),201);
        }
        if($request->options==='yojana_sangkhya'){
            $yojana_sangkhya = DB::select('SELECT * FROM yojana_sangkhya where fy=?', [$request->fy]);
            return response(array('status'=>1,'yojana_sangkhya'=>$yojana_sangkhya),201);
        }else{
            return null;
        }
    }
    function getSetting(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'aa_ba'=>'string|max:10',
        ]);
        if ($validator->fails()) {
            return response(array(0,$validator->errors()));
        }else{
            if($request->setting==='aa_ba'){
                $setting = DB::selectOne('SELECT * FROM setting Where title=?', [$request->setting]);
                return response(array(1,$setting),201);
            }else{
                return response(array(1,array()));
            }
        }
    }
    function putSetting(Request $request)
    {
        $errors = false;
        $validator = Validator::make($request->all(), [
            'aa_ba'=>'string|max:50',
        ]);
        if ($validator->fails()) {
            $errors = true;
        }else{
            if($request->aa_ba){
                $setting = DB::selectOne('SELECT * FROM setting', []);
                if($setting===null){
                    $query = DB::table('setting')->insert(['title'=>'aa_ba', 'option'=>$request->aa_ba]);
                }else{
                    $query = DB::update('UPDATE setting SET option = ? WHERE title = ? ', [$request->aa_ba, 'aa_ba']);
                }
            }
        }
        if($errors===true){
            return response(array(0,$validator->errors()));
        }else{
            return response(array(1,'सफलतापूर्वक थपियो ।'),201);
        }
    }
}
