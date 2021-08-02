const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//    .sass('resources/sass/app.scss', 'public/css');

// HACK DevTools(Edge/Chrome)의 다음 경고 메시지 삭제를 위해 sourceMaps() 호출 추가:
// "DevTools가 원본 맵 http://localhost/js/popper.js.map의 콘텐츠를 로드할 수 없습니다.HTTP 오류: 상태 코드 404,net::ERR_HTTP_RESPONSE_CODE_FAILURE 로드하지 못했습니다."
// 출처: https://stackoverflow.com/questions/47549298/webpack-installing-bootstrap-missing-popper-js-map
mix.js('resources/js/app.js', 'public/js').sourceMaps();
mix.sass('resources/sass/app.scss', 'public/css');
