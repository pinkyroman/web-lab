@extends('layouts.app')

@section('contents')
@include('templates.menu', [
    'title' => 'Training Courses',
    'items' => [
        [
            'name' => 'Blade Template',
            'routeName' => 'blade-template.home'
        ],
        [
            'name' => 'Test Menu',
            'routeName' => 'home'
        ]
    ]
])
@endsection
