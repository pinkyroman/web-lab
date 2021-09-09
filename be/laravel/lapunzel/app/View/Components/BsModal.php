<?php

namespace App\View\Components;

use Illuminate\View\Component;

class BsModal extends Component
{
    public $title;
    public $showCloseButton;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($title, $hideCloseButton = false)
    {
        $this->title = $title;
        $this->showCloseButton = !$hideCloseButton;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.bsModal');
    }
}
