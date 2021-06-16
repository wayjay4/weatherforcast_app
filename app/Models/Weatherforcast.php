<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Weatherforcast extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'temperature',
    ];
}
