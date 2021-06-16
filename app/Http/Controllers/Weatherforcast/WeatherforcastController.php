<?php

namespace App\Http\Controllers\Weatherforcast;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WeatherforcastController extends Controller
{
    public function weatherforcast()
    {
        return view('weatherforcast', [
            'page' => 'Weather Forcast Board'
        ]);
    }
}
