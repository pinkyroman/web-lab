@extends('layouts.app')

@section('contents')
@include('templates.menu', [
    'title' => 'Blade Template Courses',
    'items' => [
        [
            'name' => 'Basics',
            'routeName' => 'blade-template.home'
        ],
        [
            'name' => '@extends(...)',
            'routeName' => 'blade-template.home'
        ]
    ]
])

<x-alart>
    My First Component.
</x-alart>
@endsection