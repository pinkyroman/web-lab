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

mix.js('resources/js/app.js', 'public/js')
    .css('resources/css/app.css', 'public/css')
    .sass('resources/sass/app.scss', 'public/css')
    .vue() // to support Vue Single File Component
    .extract(['vue'])
    .sourceMaps();

// 프론트엔드 자동 캐싱 이슈 해결을 위함.
// 개발 중에는 버저닝된 파일이 항상 필요한 것이 아니므로,
// npm run production 일 때만 버저닝 프로세스가 동작하도록 아래와 같이 조치.
if (mix.inProduction()) {
    mix.version();
}
