@extends("layouts.app")
@section("title", "Bands Home")

@section("content")
<div class="col d-flex justify-content-center">
    <div class="card" style="width: 30rem;">
        <img src="{{ asset('images/band-home.jpg') }}" class="card-img-top" alt="Long live R&R">
        <div class="card-body">
            <h5 class="card-title">Bands</h5>
            <p class="card-text">Welcome to Bands! This app helps you to build a database for your favorite bands.</p>
            <p class="card-text">Please choose a menu below to start with:</p>
        </div>
        <ul class="list-group list-group-flush text-center">
            <li class="list-group-item"><a href="{{route('band-management')}}" class="card-link">Manage Bands</a></li>
            <li class="list-group-item"><a href="{{route('band-search')}}" class="card-link">Search</a></li>
            <li class="list-group-item"><a href="{{route('home')}}" class="card-link">Exit</a></li>
        </ul>
        <div class="card-footer text-muted text-center">
            ©2021 by killem
        </div>
    </div>
</div>
@endsection
