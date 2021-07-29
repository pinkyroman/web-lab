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

// in order to remove a warning from DevTools(Edge/Chrome)
// from: https://stackoverflow.com/questions/47549298/webpack-installing-bootstrap-missing-popper-js-map
mix.js('resources/js/app.js', 'public/js').sourceMaps();
mix.sass('resources/sass/app.scss', 'public/css');
