<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Lavue - @yield('title')</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <style>
        * {
            font-family: 'Nunito', sans-serif;
            font-weight: 200;
        }

        .header,
        .footer {
            color: darkslategray;
            background-color: #a3abaf;
        }

        #app {
            height: 600px;
        }
    </style>

    @stack('head')
</head>

<body>
    @section("header")
    <div class="jumbotron header">
        <h1 style="color:black">Lavue</h1>
        <p>Example codes for studying Laravel and Vue</p>
    </div>
    @show

    <!-- <div class="container-fluid text-center" style="float:none; margin:0 auto"> -->
    <div id="app" class="container">
        @yield('content')
    </div>

    @section("footer")
    <div class="panel panel-default footer">
        <div class="panel-body" style="text-align:center; padding:8px;">
            <b>
                @if(url()->current() == route('home'))
                    Select a content to enjoy!
                @else
                    Return to <a href="/">Contents</a>
                @endif
            </b>
        </div>
    </div>
    @show
</body>

<script src="{{ asset('js/app.js') }}"></script>

@stack('script')

</html>
