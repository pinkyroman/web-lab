<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SayHello extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'say:hello';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Say hello to you';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        echo "Hello, dear!\n";
        $this->output->progressStart(5);
        for ($i = 0; $i < 5; $i++) {
            sleep(1);
            $this->output->progressAdvance();
        }
        $this->output->progressFinish();

        return 0;
    }
}
