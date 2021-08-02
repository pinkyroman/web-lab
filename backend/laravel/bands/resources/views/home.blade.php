@extends('layouts.app')

@section('banner-image', asset('images/banner-home.jpg'))
@section('menu-title', 'Home')
@section('menu-description', 'Welcome to Bands! This app helps you to build a database for your favorite bands.')

<!-- 메뉴 아이템 및 링크 정의 -->
@php
$menuItems = [
    "Manage Bands" => route('bands'),
    "Manage Albums" => "#",
    "Manage Songs" => "$",
];
@endphp

@push('content')
<ul class="list-group list-group-flush text-center">
    @foreach($menuItems as $menu => $href)
    <li class="list-group-item"><a href="{{$href}}" class="card-link">{{$menu}}</a></li>
    @endforeach
</ul>
@endpush
