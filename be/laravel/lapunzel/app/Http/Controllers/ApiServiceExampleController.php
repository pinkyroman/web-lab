<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiServiceExampleController extends Controller
{
    public function index(Request $requst) {
        return view('api-service-example');
    }
}
