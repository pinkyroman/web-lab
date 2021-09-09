@extends('layouts.app')

@section('title', 'Laravel Training')

@section('contents')

{{--
@include('templates.menu', [
    'title' => 'Training Courses',
    'items' => [
        [
            'name' => 'Blade Template',
            'routeName' => 'home'
        ],
        [
            'name' => 'Test Menu',
            'routeName' => 'home'
        ]
    ]
])
 --}}

<x-bs-modal id="exampleModal" title="모달 대화상자 예제">
    <p>
        Hello, World!
    </p>
    @slot('buttons')
        <button id="applyButton" class="btn btn-primary">Apply</button>
    @endslot
</x-bs-modal>

@showBsModal([
    'id' => 'exampleModal',
    'class' => 'dark',
    'content' => 'Open Modal'
])

<a href="#" data-toggle="modal" data-target="#exampleModal">Open Modal by clicking this link</a>


<div id="app">
    <x-bs-modal id="vueModal" title="BS Modal + Vue" hideCloseButton>
        <example-component></example-component>

        @slot('buttons')
            <button id="acceptButton" class="btn btn-primary">Accept</button>
            <button id="reloadButton" class="btn btn-secondary">Reload</button>
        @endslot
    </x-bs-modal>
</div>

@showBsModal([
    'id' => 'vueModal',
    'class' => 'danger',
    'content' => 'Open Modal'
])

@endsection

<script>
window.addEventListener('DOMContentLoaded', function() {
    console.log('document loaded.');
    // exampleModal
    let applyButton = document.getElementById('applyButton');
    if (applyButton != null) {
        applyButton.addEventListener('click', function () {
            console.log('apply button clicked !');
        });
    } else {
        console.log('failed to add event handler !');
    }

    // modal()은 Bootstrap이 jQuery에 plug-in 한 것.
    $('#exampleModal').modal('show');
});
</script>
