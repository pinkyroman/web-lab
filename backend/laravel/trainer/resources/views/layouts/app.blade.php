<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>App - @yield('title')</title>
    <link href="{{ asset('css/apps.css') }}" rel="stylesheet">
    @stack('head')
</head>

<body>
    <div id="app">
        @yield('content')
    </div>
</body>
<script src="{{ asset('js/app.js') }}"></script>
@stack('script')

</html>
