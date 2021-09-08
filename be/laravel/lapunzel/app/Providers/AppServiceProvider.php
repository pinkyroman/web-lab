<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // custom blade directive example
        Blade::directive('showBsModal', function ($expression) {
            return "<?php echo sprintf('<button type=\"button\" class=\"btn btn-%s\" data-toggle=\"modal\" data-target=\"#%s\">%s</button>',
                    {$expression}['class'],
                    {$expression}['id'],
                    {$expression}['content']); ?>";
        });
    }
}
