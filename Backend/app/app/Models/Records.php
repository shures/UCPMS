<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Records extends Model
{
    use HasFactory;
    public function setDatetimeAttribute($value)
    {
        return Carbon::createFromFormat('Y-m-d', $value);
    }
}
