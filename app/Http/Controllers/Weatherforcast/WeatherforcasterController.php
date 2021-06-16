<?php

namespace App\Http\Controllers\Weatherforcast;

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use App\Models\Weatherforcast;

class WeatherforcasterController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $weather = Weatherforcast::all();

        return $this->showAll($weather);
    }
}
