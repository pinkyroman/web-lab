<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Bands - @yield('menu-title')</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <!-- <style>
        * {
            font-family: 'Nunito', sans-serif;
            font-weight: 200;
        }

        .main {
            padding: 16px;
        }
    </style> -->

    @stack('head')
</head>

<body>
    <div class="container main">
        <div class="col d-flex justify-content-center">
            <div class="card" style="width: 50rem;">
                <img src="@yield('banner-image')" class="card-img-top" alt="Long live R&R">
                <div class="card-body">
                    <h5 class="card-title">@yield('menu-title')</h5>
                    <p class="card-text">@yield('menu-description')</p>
                </div>


                <div class="card-body">
                    <div id="app">
                        @stack('content')
                    </div>
                </div>
                <div class="card-footer text-muted text-center">
                    Created ©2021 by killem
                </div>
            </div>
        </div>
    </div>
</body>

<script src="{{ asset('js/app.js') }}"></script>

@stack('script')

</html>
