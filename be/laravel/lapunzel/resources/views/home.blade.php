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

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

@endsection
