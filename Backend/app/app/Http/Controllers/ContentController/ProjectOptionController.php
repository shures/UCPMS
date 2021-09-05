<?php

namespace App\Http\Controllers\ContentController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProjectOptionController extends Controller
{
    function put_option_bank(Request $request)
    {
        $errors = false;
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
        if($errors===true){
            return response(array(0,$validator->errors()));
        }else{
            return response(array(1,"सफलतापुर्वक थपियो"),201);
        }
    }
}
