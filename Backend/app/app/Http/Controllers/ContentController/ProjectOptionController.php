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
            ]);
            if ($validator->fails()) {
                $errors = true;
            }else{
                $query = DB::table('padadhikari_pada_options')->insert(
                    [
                        'pada'=>$request->padadhikari_pada,
                    ]
                );
            }
        }
        if($errors===true){
            return response(array(0,$validator->errors()));
        }else{
            return response(array(1,"सफलतापुर्वक थपियो"),201);
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
        $errors = false;
        $bank = DB::select('SELECT * FROM bank_options', []);
        $ppa = DB::select('SELECT * FROM ppa_options', []);
        $lagat_behorne_srot = DB::select('SELECT * FROM lagat_behorne_srot_options', []);
        $padadhikari_pada = DB::select('SELECT * FROM padadhikari_pada_options', []);

        if($errors===true){
            return response(array(0,'error'));
        }else{
            return response(array('status'=>1,'bank_options'=>$bank,'ppa_options'=>$ppa,'lagat_behorne_srot_options'=>$lagat_behorne_srot,'padadhikari_pada_options'=>$padadhikari_pada),201);
        }
    }
}
