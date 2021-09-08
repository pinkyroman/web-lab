@extends('layouts.app')

@section('title', 'Laravel Training')

@section('contents')

@include('templates.menu', [
    'title' => 'Training Courses',
    'items' => [
        [
            'name' => 'Blade Template',
            'routeName' => 'home'
        ],
        [
            'name' => 'Test Menu',
            'routeName' => 'home'
        ]
    ]
])
@endsection

