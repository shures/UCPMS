<?php
namespace App\Http\Controllers\ContentController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class Setting extends Controller{

    function getSetting(Request $request){
        $validator = Validator::make($request->all(), [
            'aa_ba'=>'string|max:10',
        ]);
        if ($validator->fails()) {
            return response(array(0,$validator->errors()));
        }
        if($request->setting==='aa_ba'){
            return DB::selectOne('SELECT * FROM setting Where title=?', [$request->setting]);
        }
    }
    function putSetting(Request $request){
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
