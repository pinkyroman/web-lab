<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    private static $id = 3;
    private static $tasks = [
        [
            'id' => 0,
            'title' => 'Finishing Homework',
            'status' => 'In Progress'
        ],
        [
            'id' => 1,
            'title' => 'Having dinner with Jack',
            'status' => 'Completed'
        ],
        [
            'id' => 2,
            'title' => 'Taking a walk',
            'status' => 'Pending'
        ]
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return response()->json(self::$tasks);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        array_push(self::$tasks, [
            'id' => self::$id++,
            'title' => 'New task',
            'status' => 'Not Scheduled',
            'next' => self::$id,
        ]);

        return response()->json(self::$tasks);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
