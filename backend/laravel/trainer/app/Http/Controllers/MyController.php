<?php

namespace App\Http\Controllers;

use App\Http\Controllers;

class MyController extends Controller {
    public function sayHello($name = null) {
        if ($name === null) {
            $pageHtml = "<h1>Hello, World!</h1>";
        } else {
            $pageHtml = "<h1><i>Hello, $name!</i></h1>";
        }
        return $pageHtml;
    }
}
