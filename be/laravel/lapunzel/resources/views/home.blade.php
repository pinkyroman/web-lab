@extends('layouts.app')

@section('title', 'Laravel Training')

@section('contents')
@include('templates.menu', [
    'title' => 'Training Courses',
    'items' => [
        [
            'name' => 'Modal Example',
            'routeName' => 'modal-example'
        ],
    ]
])
@endsection
